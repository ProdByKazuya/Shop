import React, { useCallback, useState } from 'react';
import { SAuthByEmail } from './styled';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AppButton from '../../UI/AppButton/AppButton';
import VStack from '../../UI/AppStack/VStack/VStack';
import HStack from '../../UI/AppStack/HStack/HStack';
import { useAuthStore } from '../../../contexts/Auth/useAuth';
import AppInput from '../../UI/AppInput/AppInput';

const {
    Container,
    Title
} = SAuthByEmail

const AuthByEmail = ({ onClose }) => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    const { 
        authRequest, 
        registerRequest 
    } = useAuthStore()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true)

    const handleEmail = useCallback((event) => {
        const { value } = event.target
        setEmail(value)
    }, [])

    const handlePassword = useCallback((event) => {
        const { value } = event.target
        setPassword(value)
    }, [])

    const toggleIsLogin = useCallback(() => {
        setIsLogin(prev => !prev)
    }, [])

    const onSuccessRequest = useCallback(() => {
        onClose()
        navigate('/')
        setPassword('')
        setEmail('')
    }, [onClose])

    const onSubmit = useCallback((event) => {
        event.preventDefault()

        const userData = {
            email,
            password
        }

        if(isLogin) {
            authRequest(userData, onSuccessRequest)
        } else {
            registerRequest(userData, onSuccessRequest)
        }
    }, [email, password, isLogin, onSuccessRequest])

    return (
        <Container onSubmit={onSubmit}>
            <Title>{isLogin ? t('Авторизация') : t('Регистрация')}</Title>
            <VStack gap='15px' max>
                <VStack gap='20px' max align='center'>
                    <AppInput
                         
                        name='email'
                        value={email}
                        onChange={handleEmail}
                        type='text'
                        placeholder={t('Введите почту')}
                    />
                    <AppInput 
                        name='password'
                        value={password}
                        onChange={handlePassword}
                        type='password'
                        placeholder={t('Введите пароль')}
                    />
                </VStack>
                <VStack max align='center' gap='30px'>
                    <AppButton
                        theme='contained'
                        isInverted
                        type='submit'
                    >
                        {isLogin ? t('Войти') : t('Зарегистрироваться')}
                    </AppButton>
                    <AppButton
                        onClick={toggleIsLogin}
                        type='button'
                    >
                        {t('Войти/Зарегистрироваться')}
                    </AppButton>
                </VStack>
            </VStack>
        </Container>
    );
};

export default AuthByEmail;