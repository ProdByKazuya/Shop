import React, { useCallback, useEffect, useState } from 'react';
import { SSearchProducts } from './styled';
import { BiSearchAlt } from 'react-icons/bi'
import HStack from '../../UI/AppStack/HStack/HStack';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../../hooks/useDebounce';
import { useTranslation } from 'react-i18next';
import AppInput from '../../UI/AppInput/AppInput';
const {
    Container
} = SSearchProducts

const SearchProducts = () => {
    const { t } = useTranslation()
    const [searchTerm, setSeatchTerm] = useState('')

    const [searchParams, setSearchParams] = useSearchParams()

    const debouncedSearchTerm = useDebounce(searchTerm, 2000)

    const onChange = useCallback((event) => {
        const { value } = event.target

        setSeatchTerm(value)
    }, [])

    useEffect(() => {
            setSearchParams(prev => ({
                ...prev,
                q: searchTerm
            }))
    }, [debouncedSearchTerm])

    return (
        <Container>
            <HStack align='center' gap='15px'>
                <BiSearchAlt size={20} />
                <AppInput
                    isInverted
                    value={searchTerm}
                    onChange={onChange}
                    placeholder={t("Что вы ищите?")}
                />
            </HStack>
        </Container>
    );
};

export default SearchProducts;