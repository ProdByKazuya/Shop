import React, { useCallback, useState } from 'react';
import { BsArrowLeftRight } from 'react-icons/bs'
import { SSidebar } from './styled';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import SidebarItems from './SidebarItems';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = useCallback(() => {
        setCollapsed(prevCollapse => !prevCollapse)
    }, [])

    return (
        <SSidebar.Wrapper
            collapsed={collapsed}
        >
            <SSidebar.Container 
                collapsed={collapsed}
            >
                <SidebarItems collapsed={collapsed}/>
                <SSidebar.Switchers 
                    collapsed={collapsed}
                >
                    <LangSwitcher short={collapsed}/>
                    <ThemeSwitcher />
                </SSidebar.Switchers>
                <SSidebar.Collapse
                    onClick={onToggle}
                >
                    <BsArrowLeftRight size={20}/>
                </SSidebar.Collapse>
            </SSidebar.Container>
        </SSidebar.Wrapper>
    );
};

export default Sidebar;