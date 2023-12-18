import React from 'react'
import Storage from './Storage'
const App = () => {
  const [data,setData]=Storage('Content')
  return (
    <div>
      <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
    </div>
  )
}

export default App
