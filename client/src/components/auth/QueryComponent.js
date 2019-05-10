
import React from 'react'
import {Query} from 'react-apollo'


const CheckQueryCompomponent = ({query,login,password,setAuthId,mng}) => 
    <Query
      query={query}
      variables={{ login, password }}
      >
      {({ loading, error, data, refetch }) => {
        console.log(data);
        (mng==true)?
        setAuthId(data.checkauthmanager)
:
        setAuthId(data.checkauthseller)

        return (<p>Wait</p>)}}
      </Query>

export default CheckQueryCompomponent