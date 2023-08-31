import styled from "styled-components";

export const SAppModal = {
    Container: styled.div`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
        opacity: 0;

        ${({ opened }) => opened && `
            pointer-events: auto;
            opacity: 1;
        `}
    `,
    Content: styled.div`
        padding: 20px;
        border-radius: 12px;
        max-width: 60%;
        z-index: var(--modal-z-index);
        transform: scale(0.5);
        transition: 0.3s transform;
        background: var(--bg-color);

        ${({ opened }) => opened ? `
            transform: scale(1);
        ` : `
            transform: scale(0.2);
        `}
    `,
    Overlay: styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0 0 0 / 60%);
    `
}