export const getNavbarDropdownItemList = ({ t, navigate, handleSignOut, isAuth, handleAuth }) => {
    return isAuth ? [
        {
            title: t('Мой профиль'),
            onClick: () => {
                navigate('profile')
            }
        },
        {
            title: t('Корзина'),
            onClick: () => {
                navigate('cart')
            }
        },
        {
            title: t('Избранное'),
            onClick: () => {
                navigate('favorites')
            }
        },
        {
            title: t('Выйти'),
            onClick: () => {
                handleSignOut()
            }
        }
    ] : [
        {
            title: t('Корзина'),
            onClick: () => {
                navigate('cart')
            }
        },
        {
            title: t('Войти/Зарегистрироваться'),
            onClick: () => {
                handleAuth()
            }
        }
    ]
}