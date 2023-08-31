import React from 'react';
import { SAppText } from './styled';

const AppText = (props) => {

    const {
        text
    } = props

    return (
        <SAppText.Container>
           {text && (
            <SAppText.Text>
                {text}
            </SAppText.Text>
           )} 
        </SAppText.Container>
    );
};

export default AppText;