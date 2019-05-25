create or replace function Wirehouse_top_supply()
	returns table ("prodid" int)
as $$
declare
    prodByMan int[];
    countByMan bigint[];
    rand int;
    fin INT;
	new_bill_id int ;
    manarr int[];
	ki int;
    kj int;
begin
	select distinct producer_id from getDeliveryList() into manarr;
     ki:= array_length(manarr, 1);
     for iter in 1..ki
	  loop	
      INSERT INTO bill (id, billdate,producerid) VALUES (DEFAULT,  current_timestamp:: date ,manarr[iter])
        RETURNING id into new_bill_id;
				  
	 select product_id from getDeliveryList()  where producer_id =  manarr[iter] into  prodByMan;
	 select prod_count from getDeliveryList() where producer_id =  manarr[iter]  into  countByMan ;
	 kj := array_length(prodByMan, 1);
		 for iter2 in 1..jk
			 loop	
				 select random_between(6000,10000)::bigint into rand;
			 INSERT INTO billitem (billid, price,productId,quantity) 
				  VALUES (new_bill_id, rand, prodByMan[iter2],countByMan[iter2]);
	         end loop;
	      end loop;
	return query select product_id from getDeliveryList();

end;
 $$ language plpgsql;		
		select * from Wirehouse_top_supply()	