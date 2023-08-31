import React, { useCallback, useMemo, useReducer } from 'react';
import { ProductContext } from './ProductContext';
import productReducer, { initialState } from './productReducer'
import { makeRequest } from '../../helpers/makeRequest';
import { API_PRODUCTS } from '../../constants/api';

const ProductProvider = ({ children }) => {
    const [productStore, dispatch] = useReducer(productReducer, initialState)

    const getProductsRequest = useCallback(async (params) => {
        dispatch({ type: 'GET_PRODUCTS_REQUEST' })
        const data = await makeRequest(`${API_PRODUCTS}?${params}`, 'get', null)
        setTimeout(() => {
            dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: data })
        }, 1500)
    }, [])
    
    const getProductRequest = useCallback(async () => {
        
    }, [])

    const deleteProductByIdRequest = useCallback(async (id, onSuccess) => {
        try{
            dispatch({ type: 'DELETE_PRODUCT_BY_ID_REQUEST'})
        
        await makeRequest(
            `${API_PRODUCTS}/${id}`,
            'delete',
            null,
            {
                type: 'success',
                message: 'Продукт был удален!'
            }
            )
            dispatch({ type: 'DELETE_PRODUCT_BY_ID_SUCCESS', payload: id})
            onSuccess()
        } catch (error) {
            console.log(error)
        }
    }, [])

    const createProductRequest = useCallback(async(productData, onSuccess) => {
        try{
            const data = await makeRequest(
                API_PRODUCTS,
                'post',
                productData,
                {
                    type: 'success',
                    message: 'Продукт успешно добавлен'
                }
            )
            onSuccess(  )
            dispatch({ type: 'CREATE_PRODUCT_SUCCESS', payload: data})
        } catch (error){
            console.log(error)
        }
    }, [])

    const requests = useMemo(() => ({
        getProductsRequest,
        getProductRequest,
        deleteProductByIdRequest,
        createProductRequest
    }), [])

    const defaultProps = useMemo(() => ({
        products: productStore.products,
        product: productStore.product,
        loading: productStore.loading,
        error: productStore.error,
        ...requests
    }), [productStore, requests])

    return (
        <ProductContext.Provider value={defaultProps}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;