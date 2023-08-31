import styled from "styled-components";

export const SFlex = {
    Container: styled.div`
        display: flex;

        ${({ justify }) => justify && `
            justify-content: ${justify};
        `}
        ${({ align }) => align && `
            align-items: ${align};
        `}
        ${({ direction }) => direction && `
            flex-direction: ${direction};
        `}
        ${({ wrap }) => wrap && `
            flex-wrap: ${wrap};
        `}
        ${({ gap }) => gap && `
            gap: ${gap};
        `}
        ${({ max }) => max && `width: 100%;`}
    `
}