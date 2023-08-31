import React from 'react';
import { SThemeSwitcher } from './styled';
import { THEMES, useTheme } from '../../../contexts/Theme/ThemeProvider';
import { useTranslation } from 'react-i18next';
import AppButton from '../../UI/AppButton/AppButton';

const ThemeSwitcher = () => {
    const { t } = useTranslation()
    const { theme, toggleTheme } = useTheme()

    return (
        <SThemeSwitcher.Container>
            <AppButton
                isInverted
                onClick={toggleTheme}
                theme='outline'
            >
                {theme === THEMES.DARK ? t('light_theme_title') : t('dark_theme_title')}
            </AppButton>
        </SThemeSwitcher.Container>
    );
};

export default ThemeSwitcher;