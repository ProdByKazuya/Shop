import React, { useCallback, useState } from 'react';
import { SProducts } from './styled';
import ProductCard from '../Features/ProductCard/ProductCard';
import VStack from '../UI/AppStack/VStack/VStack';
import AppSkeleton from '../UI/AppSkeleton/AppSkeleton';
import AppModal from '../UI/AppModal/AppModal';
import HStack from '../UI/AppStack/HStack/HStack';
import AppText from '../UI/AppText/AppText';
import AppButton from '../UI/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import { useProductStore } from '../../contexts/Product/useProduct';

const Products = (props) => {
    const {
        products = [],
        loading = false
    } = props
    
    const { t } = useTranslation()

    const { deleteProductByIdRequest } = useProductStore()

    const [deletedProductId, setDeletedProductId] = useState(null)

    const onSuccessDelete = useCallback(() => {
        setDeletedProductId(null)
    }, [])

    const handleDeleteRequest = useCallback(() => {
        deleteProductByIdRequest(deletedProductId, onSuccessDelete)
    }, [deletedProductId, onSuccessDelete])

    if(loading) {
        return (
            <SProducts.Container>
                <VStack gap='20px'>
                    {[1,2,3].map(i => (
                        <AppSkeleton bgColor='black' height={270} key={i}/>
                    ))}
                </VStack>
            </SProducts.Container>
        )
    }

    if(!products?.length) {
        return (
            <SProducts.Container>
                Нету продуктов
            </SProducts.Container>
        )
    }

    return (
        <SProducts.Container>
            <VStack gap='20px'>
                {products.map(product => (
                    <ProductCard 
                        key={product.id}
                        product={product}
                        setDeletedProductId={setDeletedProductId}
                    />
                ))}
            </VStack>
            <AppModal
                isOpen={Boolean(deletedProductId)}
                onCLose={() => setDeletedProductId(null)}
            >
                <VStack gap='30px'>
                    <AppText
                        text={t('Вы действительно хотите удалить этот продукт?')}

                    >
                    </AppText>
                    <HStack max justify='space-evenly' >
                        <AppButton
                            theme='outline'
                            onClick={() => setDeletedProductId(null)}
                        >
                            {t('Отмена')}
                        </AppButton>
                        <AppButton
                            theme='contained'
                            isInverted
                            onClick={handleDeleteRequest}
                        >
                            {t('Удалить')}
                        </AppButton>
                    </HStack>
                </VStack>
            </AppModal>
        </SProducts.Container>
    );
};

export default Products;