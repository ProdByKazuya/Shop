import styled from "styled-components";

export const SProductCard = {
    Container: styled.div`
        position: relative;
        display: flex;
        width: 100%;
        height: 270px;
        background-color: var(--inverted-bg-color);
        color: var(--inverted-primary-color);
        border-radius: 8px;
    `,
    ImageContainer: styled.div`
        height: 100%;
        width: 270px;
        border-right: 1px solid var(--bg-color);
    `,
    Image: styled.img`
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: cover;
    `,
    Content: styled.div`
        width: 100%;
        padding: 15px;
    `,
    Title: styled.h3`

    `,
    ActionBtnWrapper: styled.div`
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    `
}