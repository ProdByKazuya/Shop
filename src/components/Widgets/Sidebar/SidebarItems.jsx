import React, { Fragment, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { AiTwotoneHome } from 'react-icons/ai'

import { SSidebarItems } from './styled';
import AppLink from '../../UI/AppLink/AppLink';
import VStack from '../../UI/AppStack/VStack/VStack';
import { sidebarItemsList } from '../../../config/sidebar/sidebarConfig';

const SidebarItems = ({ collapsed }) => {
    const { t, i18n } = useTranslation()

    const itemsList = useMemo(() => {
        return (
            <Fragment>
                {sidebarItemsList.map(item => (
                    <AppLink
                        isInverted
                        to={item.path}
                    >
                        <SSidebarItems.Item collapsed={collapsed}>
                            <item.Icon size={20}/>
                            <span>{t(item.title)}</span>
                        </SSidebarItems.Item>
                    </AppLink>
                ))}
            </Fragment>
        )
    }, [collapsed, sidebarItemsList, i18n.language])

    return (
        <SSidebarItems.Container>
            <VStack gap='20px'>
                {itemsList}
            </VStack>
        </SSidebarItems.Container>
    );
};

export default SidebarItems;