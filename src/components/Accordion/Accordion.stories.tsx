import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from './Accordion';


export default {
    title: 'Accordion stories',
    component: Accordion,
};

const callback = action("Accordion mode change event triggered")
const onClickCallback = action("Some item was clicked")

export const MenuCollapsedMode = () => <Accordion titleValue={"MENU"}
                                                  collapsed={true}
                                                  onChange={callback}
                                                  items={[]}
                                                  onClick={onClickCallback}/>;

/////////////////////////////////////////////////////////////////////////////////////////////

export const UsersUncollapsedMode = () => <Accordion titleValue={"USERS"}
                                                     collapsed={false}
                                                     onChange={callback}
                                                     onClick={onClickCallback}
                                                     items={[{title: "Robert Kiyosaki", value: 1947},
                                                         {title: "Jeff Bezos", value: 1964},
                                                         {title: "Elon Musk", value: 1971}]}
/>;

//////////////////////////////////////////////////////////////////////////////////////////////

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"USERS"}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      onClick={onClickCallback}
                      items={[{title: "Steven Jobs", value: 1955},
                          {title: "Henry Ford", value: 1863},
                          {title: "Warren Buffett", value: 1930}]}/>;
}