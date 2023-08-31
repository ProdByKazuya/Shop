import React, { useCallback, useMemo, useReducer } from 'react';
import { AuthContext } from './AuthContext';
import authReducer, { initialState } from './authReducer';
import { makeRequest } from '../../helpers/makeRequest';
import { API_LOGIN, API_REGISTER } from '../../constants/api';

const AuthProvider = ({ children }) => {
    const [authStore, dispatch] = useReducer(authReducer, initialState)

    const authRequest = useCallback(async (userData, onSuccess) => {
        dispatch({ type: 'AUTH_REQUEST' })

        const data = await makeRequest(
            API_LOGIN, 
            'post',
            userData, 
            {
                type: 'success', 
                message: 'Вы успешно авторизованы'
            }
        )
        if(data?.user) {
            localStorage.setItem('user', JSON.stringify(data.user))
            dispatch({ type: 'AUTH_SUCCESS', payload: data.user })
            onSuccess()
        }
    }, [])

    const registerRequest = useCallback(async (userData, onSuccess) => {
        dispatch({ type: 'REGISTER_REQUEST' })

        const data = await makeRequest(
            API_REGISTER, 
            'post',
            userData, 
            {
                type: 'success', 
                message: 'Вы успешно зарегистрировались'
            }
        )
        if(data?.user) {
            localStorage.setItem('user', JSON.stringify(data.user))
            dispatch({ type: 'REGISTER_SUCCESS', payload: data.user })
            onSuccess()
        }
    }, [])

    const logout = useCallback(() => {
        localStorage.removeItem('user')
        dispatch({ type: 'LOGOUT' })
    }, [])

    const defaultProps = useMemo(() => ({
        authRequest,
        registerRequest,
        logout,
        user: authStore.user,
        isAuth: !!authStore?.user?.email
    }), [authStore])

    return (
        <AuthContext.Provider
            value={defaultProps}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;