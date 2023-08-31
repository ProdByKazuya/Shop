import styled from "styled-components";

export const SAppDropdown = {
    Container: styled.div`
        display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
        position: absolute;
        background: var(--bg-color);
        color: var(--primary-color);
        box-shadow: 0px 0px 5px var(--inverted-bg-color);
        right: 0;
        border-radius: 8px;
        border: 1px solid var(--inverted-bg-color);
        z-index: 1;
    `,
    List: styled.ul`
        display: flex;
        flex-direction: column;
    `,
    ListItem: styled.li`
        white-space: nowrap;
        border-bottom: 1px solid var(--inverted-bg-color);
        padding: 10px 20px;

        :hover {
            background: var(--inverted-bg-color);
            color: var(--inverted-primary-color);
        }

        :last-child {
            border-bottom: none;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        }
    `
}
