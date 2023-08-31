import React from 'react';
import { SAppLink } from './styled';

const AppLink = (props) => {
    const {
        to,
        children,
        theme,
        isInverted,
        ...otherProps
    } = props

    return (
        <SAppLink.Container
            to={to}
            theme={theme}
            isInverted={isInverted}
            {...otherProps}
        >
            {children}
        </SAppLink.Container>
    );
};

export default AppLink;