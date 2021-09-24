import React from 'react'

export default function CurrensyList(props) {
    return (
        <div>
            <select className="selector" value={props.state} onChange={event => props.setState(event.target.value)}>
            {props.arr.map(item => (<option value={item.code} data-rate={item.rate}>{item.code}</option>))}
          </select>
        </div>
    )
}
