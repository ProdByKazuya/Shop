import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { SCreateProductForm } from './styled';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import AppButton from '../../UI/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import { useProductStore } from '../../../contexts/Product/useProduct';
import { useNavigate } from 'react-router-dom';
import { createProductFormFiedls } from './config';
import AppInput from '../../UI/AppInput/AppInput';

const {
    Form
} = SCreateProductForm;

const schema = yup.object().shape({
    title: yup.string().required('Поле обязательное').min(3, 'Минимально 3 символа').max(15, 'Максимально 15 символов'),
    price: yup.number().required('Поле обязательное'),
    imageUrl: yup.string().required()
});

const CreateProductForm = () => {
    const { t } = useTranslation()

    const navigate = useNavigate()

    const { createProductRequest } = useProductStore()

    const {
        control, 
        handleSubmit, 
        formState: {
            errors
        }
    } = useForm({
        defaultValues: {
            title: ''
        },
        resolver: yupResolver(schema)
    });

    const createOnSuccess = useCallback(() => {
        navigate('/products')
    }, [])

    const onSubmit = useCallback((data) => {
        console.log(data);
        createProductRequest({
            title: data.title,
            images: [data.imageUrl],
            price: data.price
        }, createOnSuccess)
    }, []);

    return (
        
        <Form onSubmit={handleSubmit(onSubmit)}>
            {createProductFormFiedls.map(({ name, placeholder, type }) => (
                <Controller
                    control={control}
                    name={name}
                    render={({ field }) => (
                        <AppInput
                            type={type}
                            placeholder={t(placeholder)}
                            {...field}
                        />
                    )}
                />
            ))}
            <AppButton
                type='submit'
                theme='contained'
                isInverted
            >
                Send
            </AppButton>
        </Form>
    );
};

export default CreateProductForm;
