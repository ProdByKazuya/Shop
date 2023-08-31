import React, { useCallback, useEffect, useState } from 'react';
import { SAppModal } from './styled';
import AppPortal from '../AppPortal/AppPortal';

const AppModal = (props) => {
    const {
        children,
        isOpen,
        onClose
    } = props

    const [isClosing, setIsClosing] = useState(false)

    const closeHandler = useCallback(() => {
        if(onClose) {
            setIsClosing(false)
            onClose()
        }
    }, [onClose, isOpen])

    const onKeyDown = useCallback((event) => {
        if(event.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    const onContentClick = useCallback((event) => {
        event.stopPropagation()
    }, [])

    useEffect(() => {
        if(isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    return (
        <AppPortal>
            <SAppModal.Container opened={isOpen && !isClosing}>
                <SAppModal.Overlay
                    onClick={closeHandler}
                >
                    <SAppModal.Content onClick={onContentClick} opened={isOpen}>
                        {children}
                    </SAppModal.Content>
                </SAppModal.Overlay>
            </SAppModal.Container>
        </AppPortal>
    );
};

export default AppModal;