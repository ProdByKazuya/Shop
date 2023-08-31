import styled from "styled-components";

export const SAppInput = {
    Container: styled.div`
        display: flex;
        flex-direction: column;
        ${({ isInverted }) => isInverted && `
            color: var(--inverted-primary-color);
        `}
    `,
    Input: styled.input`
        border-radius: 8px;
        border: 1px solid var(--inverted-bg-color);
        width: 100%;
        padding: 8px 10px;


        ${({ isInverted }) => isInverted && `
            color: var(--inverted-primary-color);
            border: 1px solid var(--bg-color);
        `}

        :focus {
            border: 1px solid var(--inverted-bg-color);

            ${({ isInverted }) => isInverted && `
                border: 1px solid var(--bg-color);
            `}
        }
    `,
    Label: styled.label``,
    Error: styled.p`
        color: red;
    `
}
