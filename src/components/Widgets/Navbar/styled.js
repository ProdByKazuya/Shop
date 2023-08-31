import styled from "styled-components";

export const SNavbar = {
    Container: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: var(--navbar-height);
        padding: 20px;
        background: var(--inverted-bg-color);
        color: var(--inverted-primary-color);
    `,
    LeftSide: styled.div``,
    RightSide: styled.div``,
    LogoWrapper: styled.div`
        cursor: pointer;
    `,
    AuthWrapper: styled.div`
        cursor: pointer;
        position: relative;
    `,
    Center: styled.div`
    
    `
}

