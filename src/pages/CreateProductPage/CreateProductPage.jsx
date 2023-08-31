import React from 'react';
import { useTranslation } from 'react-i18next';
import CreateProductFrom from '../../components/Features/CreateProductForm/CreateProductFrom';

const CreateProductPage = () => {
    const { t } = useTranslation()
    return (
        <div>
            {t('Создание продукта')}
            <CreateProductFrom />
        </div>
    );
};

export default CreateProductPage;