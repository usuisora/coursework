
import React from 'react'
import {Query} from 'react-apollo'


const CheckQueryCompomponent = ({Squery,Mquery,login,password,setAuthId,who}) => {

    const query = (who==='seller')? Squery: Mquery;
    
    return(
         <Query
            query={query}
            variables={{ login, password }}
            >
            {({ loading, error, data, refetch }) => {
                (who==='seller')?setAuthId(data.checkauthseller):setAuthId(data.checkauthmanager)
                return (<p style={{display:'none'}}>Hello</p>)}}
         </Query>
    )
}
   

export default CheckQueryCompomponent