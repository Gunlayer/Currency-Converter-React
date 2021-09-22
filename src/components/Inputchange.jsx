import React, {useState} from 'react'

export default function Inputchange() {
    const [value, setvalue] = useState("");
    const changeinput = event => setvalue(event.target.value);
    return (
        <div>
            <h1>Input value: {value}</h1>
            <input type="text" onChange={changeinput}></input>
        </div>
    )
}
