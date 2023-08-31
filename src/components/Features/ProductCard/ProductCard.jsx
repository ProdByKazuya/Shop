import React, { memo, useCallback, useMemo, useState } from 'react';
import { SProductCard } from './styled';
import { FiMoreVertical } from 'react-icons/fi'
import AppDropdown from '../../UI/AppDropdown/AppDropdown';
import { useTranslation } from 'react-i18next';
import { getProductMoreList } from './helpers';
import Swiper from 'swiper';


const ProductCard = memo((props) => {
    const { t, i18n } = useTranslation()
    const {
        product: {
            title,
            images,
            id
        },
        setDeletedProductId
    } = props

    const [moreIsOpen, setMoreIsOpen] = useState(false)

    const handleDelete = useCallback(() => {
        setDeletedProductId(id)
    }, [id])

    const moreList = useMemo(() => {
        return getProductMoreList({ t, handleDelete })
    }, [i18n.language, handleDelete])

    const toggleMoreIsOpen = useCallback(() => {
        setMoreIsOpen(prev => !prev)
    }, [])

    return (
        <SProductCard.Container>
                {images?.length && images.map((imageUrl) => (
                        <SProductCard.ImageContainer>
                            <SProductCard.Image src={imageUrl}/>
                        </SProductCard.ImageContainer>
                ))}
            <SProductCard.Content>
                <SProductCard.Title>
                    {title}
                </SProductCard.Title>
            </SProductCard.Content>
            <SProductCard.ActionBtnWrapper>
                <FiMoreVertical
                    onClick={toggleMoreIsOpen}
                    size={25}/>
                <AppDropdown
                    isOpen={moreIsOpen}
                    onClose={() => setMoreIsOpen(false)}
                    list={moreList}
                />
            </SProductCard.ActionBtnWrapper>
        </SProductCard.Container>
    );
})

export default ProductCard;