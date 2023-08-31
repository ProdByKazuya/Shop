import { Link } from "react-router-dom";
import styled from "styled-components";

export const SAppLink = {
    Container: styled(Link)`
        color: ${({ isInverted }) => isInverted ? 'var(--inverted-primary-color)' : 'var(--primary-color)'};
    `
}