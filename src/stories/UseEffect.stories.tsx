import React, {useEffect, useState} from "react";


export default {
    title: "useEffect demo"
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log("SimpleExample")

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log("useEffect only first render (like componentDidMount)")
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
    </>
}

export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SetTimeoutExample")

    /*useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })*/

    /*useEffect(() => {
        console.log("useEffect only first render (like componentDidMount)")
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])*/

    useEffect(() => {

        const intervalId = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }

    }, [])


    return <>
        Hello, counter: {counter} - fake: {fake}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>*/}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log("Component rendered")

    useEffect(() => {
        console.log("Effect occurred" + counter)

        return () => {
            console.log("reset effect")
        }
    }, [counter])

    return <>
        Hello, counter: {counter}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>
            +
        </button>
    </>
}

export const KeyTrackerExample = () => {
    const [text, setText] = useState("")
    console.log("Component rendered")

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        }
        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }

    }, [])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState("")
    console.log("Component rendered" + text)

    useEffect(() => {
       const timeoutId = setTimeout(() => {
            setText('3 seconds passed')
        }, 3000)

        return () => {
           clearTimeout(timeoutId)
        }

    }, [text])

    return <>
        Typed text: {text}
    </>
}