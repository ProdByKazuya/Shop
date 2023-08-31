import React, { useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from './config';

const AppRouter = () => {
    const renderWithWrap = useCallback((route) => {
        return (
            <Route 
                path={route.path}
                element={(
                    <div className='page_wrapper'>
                        {route.element}
                    </div>
                )}
                key={route.path}
            />
        )
    }, [])

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrap)}
        </Routes>
    );
};

export default AppRouter;