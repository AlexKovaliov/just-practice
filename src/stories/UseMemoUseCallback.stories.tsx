import React, {useCallback, useMemo, useState} from "react";
import {UsersType} from "./ReactMemo.stories";

export default {
    title: 'useMemo, useCallback'
}

export const DifficultCountingExample = () => {
    console.log('DifficultCountingExample')
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random()
            }
            resultA = resultA * i
        }
        return resultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }


    return <>
        <input value={a}
               onChange={(e) => setA(+e.currentTarget.value)}/>

        <input value={b}
               onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: UsersType) => {
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret);

export const HelpToReactMemo = () => {
    console.log('HelpToReactMemo')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["man", "person", "human", "girl", "people"]);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, "individual" + new Date().getTime()]
        setUsers(newUsers);
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}


export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(["React", "JS", "Redux", "HTML", "CSS"]);

    /*const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [books])*/

    const memorizedAddBookMemo = useMemo(() => {
        return () => {
            console.log(books)
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])


    const memorizedAddBook = useCallback(() => {
        console.log(books)
        const newBooks = [...books, "Angular" + new Date().getTime()]
        setBooks(newBooks);
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>Add</button>
        {/*<button onClick={() => addBook()}>add book</button>
        {counter}
        <Book books={newArray} addBook={addBook}/>*/}
        <Book addBook={memorizedAddBook}/>
    </>
}

type BooksSecretType = {
    //books: Array<string>
    addBook: () => void
}

const BooksSecret = (props: BooksSecretType) => {
    console.log('BooksSecret')
    return (
        <div>
            <button onClick={() => props.addBook()}>add book</button>
            {/*{props.books.map((book, i) => <div key={i}>{book}</div>)}*/}
        </div>
    )
}
const Book = React.memo(BooksSecret)



