import React, { useCallback } from 'react';
import { SLangSwitcher } from './styled';
import { useTranslation } from 'react-i18next';
import AppButton from '../../UI/AppButton/AppButton';

const LangSwitcher = ({ short }) => {
    const { t, i18n } = useTranslation()
    
    const onToggle = useCallback(async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }, [i18n.language])

    return (
        <SLangSwitcher.Container>
            <AppButton 
                onClick={onToggle}
                theme='contained'
            >
                {t(short ? 'short_lang' : 'lang')}
            </AppButton>
        </SLangSwitcher.Container>
    );
};

export default LangSwitcher;