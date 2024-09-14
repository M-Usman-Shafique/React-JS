import { useState, useEffect } from "react";

function Effect() {
  let [count, setcount] = useState(0);
  let [data, setdata] = useState(0);

  document.title = `Count ${count}`;

  useEffect(() => {
    console.log("Data Effect");
  }, [data]);

  useEffect(() => {
    console.warn("Count Effect");
  }, [count]);

  return (
    <div style={{textAlign: 'center'}}>
      <button onClick={() => setcount(count + 5)} style={{backgroundColor: 'black', color: 'white', fontSize: 20, borderRadius: 10, padding: 10, margin: 5}}>Count: {count}</button>
      <br></br>
      <button onClick={()=> setdata(data + 1)} style={{backgroundColor: 'black', color: 'white', fontSize: 20, borderRadius: 10, padding: 10}}>Data: {data}</button>
    </div>
  );
}

export default Effect;
