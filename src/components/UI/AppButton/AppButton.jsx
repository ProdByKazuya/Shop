import React from 'react';
import { SAppButton } from './styled';

const AppButton = (props) => {
    const {
        size,
        theme,
        disabled,
        children,
        isInverted,
        ...otherProps
    } = props

    return (
        <SAppButton.Container
            disabled={disabled}
            size={size}
            theme={theme}
            isInverted={isInverted}
            {...otherProps}
        >
            {children}
        </SAppButton.Container>
    );
};

export default AppButton;