import React from 'react'
import {MyContext} from '../../Provider'
import {getDescription} from '../../queries'
import {graphql,Query} from 'react-apollo'
import Actions from './Actions'


const Description = ({id}) =>
<Query query={getDescription} variables ={{id:id}}>
  {({ loading, error, data }) => {
      if (loading||error) return null;
    return (
          <div className="descr">
            <h5>Description</h5>
              <p>       {data.productById.description}</p>
            </div>
      );
    }}
</Query>

const InfoList = ({productInfo})=>
(productInfo.prodId === undefined) ? (<p></p>):(
<div className="">
<ul>
  <li>id: <span>{productInfo.prodId }</span></li>
  <li>model: <span>{productInfo.model }</span></li>
  <li>mark : <span>{productInfo.mark }</span></li>
  <li>color: <span>{productInfo.color }</span></li>
  <li>price: <span>{ productInfo.price }</span></li>
</ul>
<Description id ={productInfo.prodId} />
  
</div>
)




function Info() {
  return (
    <MyContext.Consumer>
      {({productInfo,setMsg,msg,updateCheck})=>
        <div className = 'info'>
          <h4>Info</h4>
          <InfoList productInfo={productInfo} />
          
         { productInfo.prodId === undefined ? 
                      (<p className='margin'>Here will be info about item...</p>) :
                       (<React.Fragment>
                           <p>There is {productInfo.avalCount} in shop point # {productInfo.shopId}</p>
                            <Actions setMsg={setMsg} msg={msg} prod={productInfo} updateCheck={updateCheck}/>
                        </React.Fragment>)}
         
        </div>
          }
    </MyContext.Consumer>
  )
}

export default graphql(getDescription,{name:'getDescription',options:(props)=>{
  return{
    variables:{
         shop: props.shop
    }
  }
}},)(Info)