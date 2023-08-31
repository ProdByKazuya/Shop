import styled from "styled-components";

export const SAppButton = {
    Container: styled.button`
        color: ${({ isInverted }) => isInverted ? 'var(--inverted-primary-color)' : 'var(--primary-color)' };
        padding: 6px 15px;
        border-radius: 8px;

        ${({ theme, isInverted }) => 
            theme === 'outline' && isInverted ? `
                border: 1px solid var(--inverted-primary-color);
                background: none;
            ` : theme === 'outline' && `
                border: 1px solid var(--primary-color);
                background: none;
            `
        }

        ${({ theme, isInverted }) => 
            theme === 'contained' && isInverted ? `
                border: none;
                background: var(--inverted-bg-color);
            ` : theme === 'contained' && `
                border: none;
                background: var(--bg-color);
            `
        }
    `
}