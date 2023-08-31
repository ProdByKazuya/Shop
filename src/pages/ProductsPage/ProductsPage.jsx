import React, { useEffect } from 'react';
import { useProductStore, useProductStoreLoading, useProducts } from '../../contexts/Product/useProduct';
import Products from '../../components/Products/Products';
import { useSearchParams } from 'react-router-dom';

const ProductsPage = () => {
    const [searchParams] = useSearchParams()
    const { getProductsRequest } = useProductStore()
    const products = useProducts()
    const loading = useProductStoreLoading()

    useEffect(() => {
        getProductsRequest()
    }, [])

    useEffect(() => {
        if(searchParams.size) {
            getProductsRequest(searchParams)
        }
    }, [searchParams])

    return (
        <div>
            <Products 
                loading={loading}
                products={products}
            />
        </div>
    );
};

export default ProductsPage;