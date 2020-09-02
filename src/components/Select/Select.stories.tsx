import React, {useState} from 'react';
import {Select} from './Select';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Select stories',
    component: Select
};

export const WithValue = () => {
    const [value, setValue] = useState("2");
    return <>
        <Select value={value}
                onChange={setValue}
                items={[
                    {value: "1", title: "Washington"},
                    {value: "2", title: "NewYork"},
                    {value: "3", title: "LosAngeles"},
                ]}/>
    </>
}

//////////////////////////////////////////////////////////////////////////////////////////

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: "1", title: "Washington"},
                    {value: "2", title: "NewYork"},
                    {value: "3", title: "LosAngeles"},
                ]}/>
    </>
}
