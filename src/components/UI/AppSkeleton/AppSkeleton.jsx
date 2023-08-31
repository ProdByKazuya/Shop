import React from 'react';
import { SAppSkeleton } from './styled';
import ContentLoader from 'react-content-loader';

const AppSkeleton = (props) => {
    const {
        height,
        bgColor = '#cfe8f7'
    } = props

    return (
        <SAppSkeleton.Container>
            <ContentLoader 
                viewBox='0 0 100% 160'
                height={height}
                width='100%'
                backgroundColor={bgColor}
                {...props}
            >
                <rect 
                    x='0' 
                    y='0' 
                    rx='5' 
                    ry='5'
                    width='100%'
                    height={height}
                />
            </ContentLoader>
        </SAppSkeleton.Container>
    );
};

export default AppSkeleton;