
import React, { useEffect, useState } from "react"

function PrintTable({ calculateTable }) {
let [rows, setRows] = useState([]);

useEffect(() => {
console.log("Print Table Runs!")
setRows(calculateTable());
}, [calculateTable]);

return rows.map((row, index) => {
    return <p key={index}>{row}</p>;
})
I
}
export default PrintTable;
