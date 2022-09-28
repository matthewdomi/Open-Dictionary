import React from 'react'

export const getstatisProps = async() =>{
    const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en');
    const data = await res.json({d});
    console.log(data);

    return{
        props:{data}
    }
}

const FetchData = ({data}) => {
  return (
    <div>
        <h1>asdffgadfadm</h1>
        
    </div>
  )
}

export default FetchData