import React from 'react';
import ProductProvider from '../Product/ProductProvider';
import AuthProvider from '../Auth/AuthProvider';

const StoreProvider = ({ children }) => {
    return (
        <AuthProvider>
            <ProductProvider>
                {children}
            </ProductProvider>
        </AuthProvider>
    );
};

export default StoreProvider;