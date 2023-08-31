import React from 'react';
import { SFlex } from './styled';

const Flex = (props) => {
    const {
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        wrap = 'nowrap',
        gap,
        max,
        ...otherProps
    } = props

    return (
        <SFlex.Container
            justify={justify}
            align={align}
            direction={direction}
            wrap={wrap}
            gap={gap}
            max={max}
            {...otherProps}
        >
           {children}
        </SFlex.Container>
    );
};

export default Flex;