import React, {useState} from 'react';

type PropsType = {}


export function OnOff(props: PropsType) {

    let [on, setOn] = useState(false)

    let onStyle = {
        width: "60px",
        height: "40px",
        border: "1px solid black",
        borderRadius: "10px",
        display: "inline-block",
        marginLeft: "5px",
        padding: "5px",
        cursor: "pointer",
        backgroundColor: on ? "green" : "#E9F7EF" // тернарное выражение
    }

    let offStyle = {
        width: "60px",
        height: "40px",
        border: "1px solid black",
        borderRadius: "10px",
        display: "inline-block",
        marginLeft: "5px",
        padding: "5px",
        cursor: "pointer",
        backgroundColor: on ? "#FDEDEC" : "red"
    }

    let indStyle = {
        width: "35px",
        height: "35px",
        borderRadius: "25px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "5px",
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div>
            <span style={onStyle} onClick={() => {
                setOn(true)
            }}>On</span>
            <span style={offStyle} onClick={() => {
                setOn(false)
            }}>Off</span>
            <span style={indStyle}>light</span>
        </div>
    )
}