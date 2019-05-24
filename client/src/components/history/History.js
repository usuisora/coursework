import React,{useState} from 'react'
import SearchResult from './SearchResult'
import SearchCheck from './SearchCheck'




function History() {
  const [id,setId] = useState(0)
  return (
    <div className ='history'>
      <h4>History</h4>
      <blockquote>
        archive of purhuase
      </blockquote>
     <SearchCheck id = {id}  setId = {setId}/>
     <SearchResult id = {id} />

    </div>
  )
}

export default History
