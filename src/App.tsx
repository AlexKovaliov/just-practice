import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

export function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);

    return (
        <div className={"App"}>

            <PageTitle title={"This is APP component"}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>

            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed}/>

            <Accordion titleValue={"Users"} collapsed={true}/>

            <OnOff/>

            <UncontrolledAccordion titleValue={"Menu"}/>

            <UncontrolledRating/>

        </div>
    )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}



