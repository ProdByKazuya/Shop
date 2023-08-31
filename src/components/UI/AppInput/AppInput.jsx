import React from 'react';
import { SAppInput } from './styled';

const AppInput = (props) => {
    const {
        label,
        theme,
        errorTitle,
        isInverted,
        ...otherProps
    } = props

    return (
        <SAppInput.Container isInverted>
            {label && (
                <SAppInput.Label>
                    {label}
                </SAppInput.Label>
            )}
            <SAppInput.Input
                theme={theme}
                {...otherProps}
            />
            {errorTitle && (
                <SAppInput.Error>
                    {errorTitle}
                </SAppInput.Error>
            )}
        </SAppInput.Container>
            
    );
};

export default AppInput;