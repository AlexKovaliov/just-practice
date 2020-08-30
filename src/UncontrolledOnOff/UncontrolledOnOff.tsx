import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}


export function UncontrolledOnOff(props: PropsType) {
    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)


    const onStyle = {
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

    const offStyle = {
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

    const indStyle = {
        width: "35px",
        height: "35px",
        borderRadius: "25px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "5px",
        backgroundColor: on ? "green" : "red"
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <span style={onStyle}
                  onClick={onClicked}>
                On
            </span>

            <span style={offStyle}
                  onClick={offClicked}>
                Off
            </span>

            <span style={indStyle}>light</span>
        </div>
    )
}