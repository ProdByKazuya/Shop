import React from 'react';
import Flex from '../Flex/Flex';

const VStack = (props) => {
    const { align = 'start' } = props
    return <Flex direction='column' align={align} {...props}/>
};

export default VStack;