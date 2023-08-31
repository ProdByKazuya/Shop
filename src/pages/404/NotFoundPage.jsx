import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AppButton from '../../components/UI/AppButton/AppButton';
import VStack from '../../components/UI/AppStack/VStack/VStack';

const NotFoundPage = () => {
    const { t } = useTranslation()

    const navigate = useNavigate()

    const goMain = useCallback(() => {
        navigate('/')
    }, [])
    return (
        <VStack
            max
            justify='center'
            align='center'
        >
            <p>{t('Страница не существует')}</p>
            <AppButton
                onClick={goMain}
                theme='contained'
                isInverted
            >
                {t('Перейдите на главную')}</AppButton>
        </VStack>
    );
};

export default NotFoundPage;