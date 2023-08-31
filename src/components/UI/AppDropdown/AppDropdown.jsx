import React, { useRef } from 'react';
import { SAppDropdown } from './styled';
import useOnClickOutside from '../../../hooks/useOutsideClick';

const AppDropdown = (props) => {
    const ref = useRef(null)

    const {
        isOpen, 
        list,
        onClose
    } = props

    useOnClickOutside(ref, onClose)

    return (
        <SAppDropdown.Container ref={ref} isOpen={isOpen}>
            <SAppDropdown.List>
                {list?.length && list.map(listItem => (
                    <SAppDropdown.ListItem onClick={listItem.onClick}>
                        {listItem.title}
                    </SAppDropdown.ListItem>
                ))}
            </SAppDropdown.List>
        </SAppDropdown.Container>
    );
};

export default AppDropdown;