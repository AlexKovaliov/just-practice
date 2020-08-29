import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from './Accordion';


export default {
    title: 'Accordion stories',
    component: Accordion,
};

const callback = action("Accordion mode change event triggered")

export const MenuCollapsedMode = () => <Accordion titleValue={"MENU"} collapsed={true} onChange={callback}/>;
export const UsersUncollapsedMode = () => <Accordion titleValue={"USERS"} collapsed={false} onChange={callback}/>;
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"USERS"} collapsed={value} onChange={() => setValue(!value) }/>;
}