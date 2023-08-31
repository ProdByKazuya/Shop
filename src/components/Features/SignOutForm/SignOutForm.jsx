import React from 'react';
import { useTranslation } from 'react-i18next';
import AppButton from '../../UI/AppButton/AppButton';
import HStack from '../../UI/AppStack/HStack/HStack';
import VStack from '../../UI/AppStack/VStack/VStack';
import AppText from '../../UI/AppText/AppText';
import { SSignOutModal } from './styled';

const SignOutForm = ({ onConfirm, onCancel }) => {
    const { t } = useTranslation()
    return (
        <SSignOutModal.Container>
                        <VStack gap='30px'>
                            <SSignOutModal.Title>
                                <AppText
                                    text={t('Вы уверены что хотите выйти?')}
                                />
                            </SSignOutModal.Title>
                            <SSignOutModal.ButtonWrapper>
                                <HStack max justify='space-evenly'>
                                    <AppButton
                                        theme='outline'
                                        onClick={onCancel}
                                    >
                                        {t('Отмена')}
                                    </AppButton>
                                    <AppButton
                                        isInverted
                                        theme='contained'
                                        onClick={onConfirm}
                                    >
                                        {t('Выйти')}
                                    </AppButton>
                                </HStack>
                            </SSignOutModal.ButtonWrapper>
                        </VStack>
        </SSignOutModal.Container>
    );
};

export default SignOutForm;