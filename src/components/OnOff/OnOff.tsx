import React from 'react';

type PropsType = {
    on: boolean,
    onChange: (on: boolean) => void
}


export function OnOff(props: PropsType) {


    let onStyle = {
        width: "60px",
        height: "40px",
        border: "1px solid black",
        borderRadius: "10px",
        display: "inline-block",
        marginLeft: "5px",
        padding: "5px",
        cursor: "pointer",
        backgroundColor: props.on ? "green" : "#E9F7EF" // тернарное выражение
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
        backgroundColor: props.on ? "#FDEDEC" : "red"
    }

    let indStyle = {
        width: "35px",
        height: "35px",
        borderRadius: "25px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "5px",
        backgroundColor: props.on ? "green" : "red"
    }

    return (
        <div>
            <span style={onStyle} onClick={() => {
                props.onChange(true)
            }}>On</span>
            <span style={offStyle} onClick={() => {
                props.onChange(false)
            }}>Off</span>
            <span style={indStyle}>light</span>
        </div>
    )
}