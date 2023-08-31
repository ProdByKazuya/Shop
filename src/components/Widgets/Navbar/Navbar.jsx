import React, { useCallback, useMemo, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { FaUserAstronaut } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


import { SNavbar,  } from './styled';
import AppText from '../../UI/AppText/AppText';
import HStack from '../../UI/AppStack/HStack/HStack';
import AppDropdown from '../../UI/AppDropdown/AppDropdown';
import { getNavbarDropdownItemList } from './helpers';
import AppModal from '../../UI/AppModal/AppModal';
import AuthByEmail from '../../Features/AuthByEmail/AuthByEmail';
import { useAuthStore } from '../../../contexts/Auth/useAuth';
import SearchProducts from '../../Features/SearchProducts/SearchProducts';
import SignOutForm from '../../Features/SignOutForm/SignOutForm';


const Navbar = () => {
    const navigate = useNavigate()
    const { t, i18n } = useTranslation()

    const location = useLocation()

    const { isAuth, logout, user } = useAuthStore()

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
    const [signOutModalIsOpen, setSignOutModalIsOpen] = useState(false)
    const [authModalIsOpen, setAuthModalIsOpen] = useState(false)

    const isProductsPage = useMemo(
        () => location.pathname === '/products',
        [location.pathname]
    )

    const goToMain = useCallback(() => {
        navigate('/')
    }, [])

    const toggleDropdown = useCallback(() => {
        setDropdownIsOpen(prev => !prev)
    }, [])

    const handleSignOut = useCallback(() => {
        setSignOutModalIsOpen(true)
        setDropdownIsOpen(false)
    }, [])

    const handleAuth = useCallback(() => {
        setAuthModalIsOpen(true)
        setDropdownIsOpen(false)
    }, [])

    const dropdonwList = useMemo(() => {
        return getNavbarDropdownItemList({ t, navigate, handleSignOut, isAuth, handleAuth })
    }, [i18n.language, handleSignOut, handleAuth])

    const handleCloseModal = useCallback(() => {
        setSignOutModalIsOpen(false)
    }, [])

    const handleLogout = useCallback(() => {
        logout()
        handleCloseModal()
    }, [handleCloseModal])

    return (
        <SNavbar.Container>
            <SNavbar.LeftSide>
                <SNavbar.LogoWrapper onClick={goToMain}>
                    <HStack gap='.5rem'>
                        <AiFillGithub size={30}/>
                        <AppText
                            text='Production'
                        />
                    </HStack>
                </SNavbar.LogoWrapper>
            </SNavbar.LeftSide>
            <SNavbar.Center>
                {isProductsPage && (
                    <SearchProducts />
                )}
            </SNavbar.Center>
            <SNavbar.RightSide>
                <SNavbar.AuthWrapper>
                    <HStack gap='15px'>
                        <AppText
                            text={user?.email}
                        />
                        <FaUserAstronaut onClick={toggleDropdown} size={20}/>
                    </HStack>
                    <AppDropdown
                        list={dropdonwList}
                        isOpen={dropdownIsOpen}
                        onClose={() => setDropdownIsOpen(false)}
                    />
                </SNavbar.AuthWrapper>
            </SNavbar.RightSide>
            <AppModal
                isOpen={signOutModalIsOpen}
                onClose={handleCloseModal}
            >
                <SignOutForm
                    onCancel={handleCloseModal}
                    onConfirm={handleLogout}
                />
            </AppModal>
            <AppModal
                isOpen={authModalIsOpen}
                onClose={() => setAuthModalIsOpen(false)}
            >
                <AuthByEmail
                    onClose={() => setAuthModalIsOpen(false)}
                />
            </AppModal>
        </SNavbar.Container>
    );
};

export default Navbar;