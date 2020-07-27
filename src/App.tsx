import React from 'react';
import './App.css';

export function App() {
    debugger
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    )
}

function Star() {
    return (
        <div>Star</div>
    )
}

function AppTitle() {
    return (
        <div>
            <h1>This is APP component</h1>
        </div>
    )
}

function Rating() {
    debugger
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function AccordionTitle() {
    return (
        <div>
            <h3>Menu</h3>
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

function Accordion() {
    debugger
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

