
CREATE OR REPLACE FUNCTION public.checkauthmanager(
	login character varying,
	password character varying)
    RETURNS integer
    LANGUAGE 'plpgsql'

    COST 100
    STABLE 
AS $BODY$

declare 
rec RECORD;
cur Cursor for Select * from shoppassword;

begin
Open cur;
LOOP
    -- fetch row into the film
      FETCH cur INTO rec;
    -- exit when no more row to fetch
      EXIT WHEN NOT FOUND;
 
    -- build the output
	   IF rec.login = login and rec.password= password THEN 
																		return rec.shopid;
	   END IF;
   END LOOP;
   -- Close the cursor
   CLOSE cur;
   RETURN -1;
END; 



CREATE OR REPLACE FUNCTION public.checkauthseller(
	login character varying,
	password character varying)
    RETURNS integer
    LANGUAGE 'plpgsql'

    COST 100
    STABLE 
AS $BODY$

declare 
rec RECORD;
cur Cursor for Select * from sellerpassword;

begin
Open cur;
LOOP
    -- fetch row into the film
      FETCH cur INTO rec;
    -- exit when no more row to fetch
      EXIT WHEN NOT FOUND;
 
    -- build the output
	   IF rec.login = login and rec.password= password THEN 
																		return rec.sellerid;
	   END IF;
   END LOOP;
   -- Close the cursor
   CLOSE cur;
   RETURN -1;
END; 
$BODY$;

ALTER FUNCTION public.checkauthseller(character varying, character varying)
    OWNER TO postgres;



.... view all items on wirehouse existed:
CREATE OR REPLACE VIEW public.wirehouse_view AS
					
					WITH t1 AS (
         SELECT distinct  bi.productid,
           round(bi.price) AS price ,
            sum(bi.quantity) OVER (PARTITION BY bi.productid) AS all_count
           FROM billitem bi
          ORDER BY bi.productid
        ), t2 AS (
         SELECT distinct  pr.id,
            pr.model,
            pr.category,
            t1.price ,
            t1.all_count,
            sum(pm.quantity) OVER (PARTITION BY pr.id) AS closed_count
           FROM t1
               JOIN product pr ON pr.id = t1.productid
             left JOIN primaryreserve pm ON pm.product_id = t1.productid
          ORDER BY pr.id
        ), t3 as (
 SELECT t2.id AS prod_id,
    t2.model,
    t2.category,
    t2.price,
    t2.all_count - COALESCE(t2.closed_count,0::bigint) AS aval_count
   FROM t2)
				select prod_id,model, category,price, aval_count from t3

///wirehouse by category 

create or replace function get_wirehouse_by_category(cat varchar(32))
				 returns table("prod_Id" int,"model" varchar(20), "price" numeric,"aval_count" bigint)
as $$
	declare cond tech_category;															 
begin
	  cond = cat as tech_category;
		return query select w.prod_Id,w.model,w.price,w.aval_count from wirehouse_view w
	 where w.category = cond;
end;
$$ language plpgsql immutable;

select * from get_wirehouse_by_category('fridge')



/// sale with rollaback
create or replace function Sale(
sellerid int,
products int[],
prcount  int[])
	returns table("check_id" int,"product_id" int,"model" varchar(20),"category" tech_category, "color" varchar(20), "count" int,
				  "seller" varchar(20),
				  "price" numeric, "date" timestamp)
as $$
declare
	fin INT;
	checkid INT;
	checkdate timestamp;
begin
INSERT INTO buycheck (id, seller_id,data) VALUES (DEFAULT, sellerid, current_timestamp )
   RETURNING id,data into checkid, checkdate ;
   raise notice 'checkid=%',checkid;
   raise notice 'date=%',checkdate;
   
   fin:= array_length(products, 1);

    for iter in 1..fin
	 loop
	 insert into checkcontent(check_id,product_id,count) values(checkid,products[iter],prcount[iter]);
	end loop;
																							   
return query select * from checkview  where (checkview.checkviewid = checkid);
	 BEGIN
         EXCEPTION 
         WHEN OTHERS THEN
         BEGIN
   				raise notice 'rollback';
         ROLLBACK;
         END;            
       END;
end;
 $$ language plpgsql;


Select * from sale(10,array[12,11],array[1,1])





..Supply

create view Supply_view as (
select destribution_id,shop_id, product_id,model,quantity,category from shopdeliverybill sd join primaryreserve pm on
sd.id = pm.destribution_id 
join product pr on pm.product_id = pr.id);

 select * from Supply_View 


///Mutation on Supply

create or replace function Supply(
shopid int,
products int[],
prcount  int[])
	returns table("destribution_id" int, "shop_id" int,
				  "product_id" int,"model" varchar(20),
				  "quantity" int,"category" tech_category)
as $$
declare
	fin INT;
	dist_id INT;
	dist_date timestamp;
begin
INSERT INTO shopdeliverybill (id, shop_id,data) VALUES (DEFAULT, shopid, current_timestamp )
   RETURNING id,data into dist_id,dist_date ;
   raise notice 'dist_id =%',dist_id;
   raise notice 'dist_date=%',dist_date ;
   
   fin:= array_length(products, 1);

    for iter in 1..fin
	 loop
	 insert into primaryreserve (destribution_id,product_id,quantity) values(dist_id,products[iter],prcount[iter]);
	end loop;
																							   
return query  select * from Shop_Supply_View where Shop_Supply_View.destribution_id = dist_id;

	 BEGIN
         EXCEPTION 
         WHEN OTHERS THEN
         BEGIN
   				raise notice 'rollback';
         ROLLBACK;
         END;            
       END;
end;
 $$ language plpgsql;
																											
Select * from Supply(1,array[17,16],array[1,1])



.////////////////////.block of supply over order




create or replace function SupplyBlockFun() returns trigger
as $$
declare avalcount integer;

begin 



select aval_count into avalcount from wirehouse_view;
raise notice 'avalcount=(%)',avalcount;
 if(new.quantity >= avalcount)
   then 
      raise exception 'error: AMOUNT MORE THAN AVALIBLE';
 end if;
 return new;
 end ;
 $$ language plpgsql;

create trigger SupplyBlock before insert on primaryreserve
for each row EXECUTE PROCEDURE SupplyBlockFun()

Select * from Supply(1,array[17,16],array[1234,1])
///////////////////////////
///////////
/////////////
	with t1 as (select  shop_id, product_id, sum (count) 
					from  viewfullchecksext
			       group by  (shop_id,product_id)
	           order by (shop_id,product_id)
			   ),
					
	 t2 as (select shop_id, product_id , sum(quantity)  from primaryreserve pm join shopdeliverybill sb on sb.id = pm.destribution_id 
     group by  (shop_id,product_id)
	 order by (shop_id,product_id)),
			   
			   t3 as (
			    SELECT 
	sh.id  as shop_id,	   
    pr.id AS prod_id,
    pd.mark,
    pr.model,
    pr.color,
	pr.category,		   
    bi.price
   FROM product pr
     JOIN billitem bi ON bi.productid = pr.id
     JOIN bill ON bill.id = bi.billid
     JOIN producers pd ON bill.producerid = pd.id
     JOIN primaryreserve pm ON pr.id = pm.product_id
     JOIN shopdeliverybill sdb ON pm.destribution_id = sdb.id
     JOIN shop sh ON sh.id = sdb.shop_id
				   group by (sh.id,pr.id,pd.mark, pr.model,
    pr.color,
	pr.category,		   
    bi.price
			   )
				    order by (sh.id,pr.id,pd.mark, pr.model,
    pr.color,
	pr.category,		   
    bi.price
			   ))
							  
		select * from
							  t1 , t2
							  
			   
 SELECT 
		pr.category,
		t1.product_id AS prod_id,
		pr.model,
		pr.color,
    	bi.price
   FROM product pr
     
     JOIN producers pd ON bill.producerid = pd.id
	 join t1 on t1.product_id = pr.id	and 	t1.product_id = pr.id							   
     group by  (t1.shop_id,pr.id,bi.price,t1.shop_id,
		pr.category,
		pd.mark)
JOIN billitem bi ON bi.productid = pr.id
     JOIN bill ON bill.id = bi.billid
		pd.mark,


// product view


	CREATE OR REPLACE VIEW public.productsview AS(
	with t1 as (select  shop_id, product_id, sum (count) as sold
					from  viewfullchecksext
			       group by  (shop_id,product_id)
	           order by (shop_id,product_id)
			   ),
					
	 t2 as (select shop_id, product_id , sum(quantity) as deliver 
			from primaryreserve pm 
			join shopdeliverybill sb on sb.id = pm.destribution_id 
     group by  (shop_id,product_id)
	 order by (shop_id,product_id)),
			   
			   t3 as (
			    SELECT 
	sh.id  as shop_id,	   
    pr.id AS prod_id,
    pd.mark,
    pr.model,
    pr.color,
	pr.category,		   
    bi.price
   FROM product pr
     JOIN billitem bi ON bi.productid = pr.id
     JOIN bill ON bill.id = bi.billid
     JOIN producers pd ON bill.producerid = pd.id
     JOIN primaryreserve pm ON pr.id = pm.product_id
     JOIN shopdeliverybill sdb ON pm.destribution_id = sdb.id
     JOIN shop sh ON sh.id = sdb.shop_id
				   group by (sh.id,pr.id,pd.mark, pr.model,
    pr.color,
	pr.category,		   
    bi.price
			   )
				    order by (sh.id,pr.id,pd.mark, pr.model,
    pr.color,
	pr.category,		   
    bi.price
			   )),
							  
	jti as (	select t2.shop_id, t2.product_id,  deliver,coalesce(t1.sold, 0) :: int as solded   from
							  t2 left join t1 on t1.shop_id = t2.shop_id and  t1.product_id = t2.product_id ),
							  
			jt as (select shop_id, product_id,  deliver,solded,  deliver- solded as aval_count from jti)
							   
			   
 SELECT 
	pr.category,
    pd.mark,
    pr.id AS prod_id,
    pr.model,
    pr.color,
     aval_count,
    bi.price,
    shop_id		 
					  
   FROM product pr 	JOIN billitem bi ON bi.productid = pr.id
					 JOIN bill ON bill.id = bi.billid
					 JOIN producers pd ON bill.producerid = pd.id
					 join  jt on jt.product_id = pr.id							   
     group by  (shop_id,pr.id,bi.price,mark, model,
		pr.category,
		pd.mark,
			   aval_count)
)
///
block 
sale



create or replace function SaleBlockFun() returns trigger
as $$
declare avalcount integer;
declare shopid integer;

begin 

with tc as ( select sl.shop_id from buycheck bc join seller sl  on bc.seller_id = sl.id  where bc.id = new.check_id)

select tc.shop_id into shopid from  tc ;

with t as (
select * from productsview pv where pv.shop_id = shopid)


select aval_count into avalcount from t ;
raise notice 'avalcount=(%)',avalcount;
raise notice 'shop_id=(%)',shopid;

 if(new.count > avalcount)
   then 

      raise exception 'error';
 end if;
 return new;
 end ;
 $$ language plpgsql;



create trigger SaleBlock before insert on checkcontent 
for each row EXECUTE PROCEDURE SaleBlockFun()




create trigger SaleBlock before insert on checkcontent 
for each row EXECUTE PROCEDURE SaleBlockFun()



///delivery list

 create function GetDeliveryList ()
returns  table("product_id" int, "product_model" varchar(20),"product_color" varchar(20), "prod_count" bigint)
 as $$

begin 
   return query select productid, model,color, sum(checkview.count) from checkview   
where ( date_part('day',age(checkdate)) < 7)
				  group by(productid,model,color);	
end;
 $$ language plpgsql stable;

Select * from GetDeliveryList ()



....
checkview.///////////////

CREATE OR REPLACE VIEW public.checkview AS
 SELECT bc.id AS checkviewid,
    pr.id AS productid,
    pr.model,
    pr.category,
    pr.color,
    cc.count,
	sl.id as seller_id,
    sl.name AS seller_name,
    sl.last_name AS seller_lastname,
	
    bi.price + bi.price * 0.11 AS pricetax,
    bc.data AS checkdate
   FROM buycheck bc
     JOIN checkcontent cc ON bc.id = cc.check_id
     JOIN product pr ON pr.id = cc.product_id
     JOIN seller sl ON sl.id = bc.seller_id
     JOIN billitem bi ON bi.productid = pr.id;
select * from checkview


...supply from producer


CREATE OR REPLACE FUNCTION random_between(low INT ,high INT) 
   RETURNS INT AS
$$
BEGIN
   RETURN floor(random()* (high-low + 1) + low);
END;
$$ language 'plpgsql' STRICT;







																		
newprod
	/////////////					
select postTopBill()


							select * from posttopbill()											
CREATE OR REPLACE FUNCTION postTopBill()
    RETURNS int
	AS $$
	DECLARE
    producers int[];
	new_billid int;
	len int;
	len2 int;
	prods int[];
	counts int[];
	rand bigint;
	new_prod_id int;
	newprod product%ROWTYPE;
	begin
	select array(select distinct producer_id from getDeliveryList()) into producers;
															  
     len:= array_length(producers, 1);
     for ind in 1..len
	  loop	
		  INSERT INTO bill(id, billdate,producerid) VALUES (DEFAULT,  current_date,producers[ind])
			RETURNING bill.id into new_billid;
			
																							 
			  select array( select product_id from getDeliveryList()  where producer_id =  producers[ind] )into  prods;
			  select array( select prod_count from getDeliveryList() where  producer_id =  producers[ind]) into  counts ;

		 len2 := array_length(prods, 1);
			 for iter2 in 1..len2
				 loop	
					select * from product where id = prods[iter2] into newprod;
					insert into
						product (id,model,color,category,volume,description, turns_in_sec)
				    	values (default,newprod.model,newprod.color,newprod.category,newprod.volume,
							newprod.description,newprod.turns_in_sec) 
																	returning id into new_prod_id;
					 select random_between(6000,10000)::bigint into rand;
				  	INSERT INTO billitem (billid, price,productid,quantity) 
					  VALUES (new_billid, rand, new_prod_id,counts[iter2]);
																	
					
				 end loop;
            end loop;
	return 1;
end;
 $$ language plpgsql;




//new sale

sELECT bc.id AS checkviewid,
    pr.id AS productid,
    pr.model,
    pr.category,
    pr.color,
    cc.count,
    sl.id AS seller_id,
    sl.name AS seller_name,
    sl.last_name AS seller_lastname,
    bi.price + bi.price * 0.11 AS pricetax,
    bc.data AS checkdate
					
					
				select * from checkview	
					
					create or replace function Sale(
sellerid int,
products int[],
prcount  int[])
	returns table("check_id" int,"product_id" int,"model" varchar(20),
				  "category" tech_category, "color" varchar(20), "count" int,
				  "seller" integer,
				  "sellerName" varchar(20),
		          "sellerLastName" varchar(20),
				  "price" numeric, "date" timestamp)
as $$
declare
	fin INT;
	checkid INT;
	checkdate timestamp;
begin
INSERT INTO buycheck (id, seller_id,data) VALUES (DEFAULT, sellerid, current_timestamp )
   RETURNING id,data into checkid, checkdate ;
   raise notice 'checkid=%',checkid;
   raise notice 'date=%',checkdate;
   
   fin:= array_length(products, 1);

    for iter in 1..fin
	 loop
	 insert into checkcontent(check_id,product_id,count) values(checkid,products[iter],prcount[iter]);
	end loop;
																							   
return query select * from checkview  where (checkview.checkviewid = checkid);
	 BEGIN
         EXCEPTION 
         WHEN OTHERS THEN
         BEGIN
   				raise notice 'rollback';
         ROLLBACK;
         END;            
       END;
end;
 $$ language plpgsql;


Select * from sale(10,array[12,11],array[1,1])



/////////////





	CREATE OR REPLACE VIEW public.wirehouse_view AS
					
					WITH t1 AS (
         SELECT distinct  bi.productid,
           round(bi.price) AS price ,
            sum(bi.quantity) OVER (PARTITION BY bi.productid) AS all_count
           FROM billitem bi
          ORDER BY bi.productid
        ), t2 AS (
         SELECT distinct  pr.id,
            pr.model,
            pr.category,
            t1.price ,
            t1.all_count,
            sum(pm.quantity) OVER (PARTITION BY pr.id) AS closed_count
           FROM t1
             JOIN product pr ON pr.id = t1.productid
             JOIN primaryreserve pm ON pm.product_id = t1.productid
          ORDER BY pr.id
        )
 SELECT t2.id AS prod_id,
    t2.model,
    t2.category,
    t2.price,
    t2.all_count - t2.closed_count AS aval_count
   FROM t2;