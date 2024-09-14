// import { Input } from 'postcss'
import { useState } from 'react'

function StateObj() {
  let [Obj, setObj] = useState({fname: " ", lname:" "})

  return (
    <form>
      <input type="text" value={Obj.fname} onChange={e => setObj({... Obj, fname: e.target.value})} style={{margin: '30px 30px 10px 0', width: '25vw', height: '6vh'}}></input>
      <input type="text" value={Obj.lname} onChange={e => setObj({... Obj, lname: e.target.value})} style={{margin: '20px 30px 0 0', width: '25vw', height: '6vh'}}></input>
      {/* if object with spread operators (... Obj) was not inserted in start, then on changing the input field, the input data was removed. */}
      <h2>{Obj.fname} {Obj.lname}</h2>
    </form>
  )
}

export default StateObj