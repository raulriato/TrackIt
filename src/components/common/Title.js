import styled from "styled-components";

const Title = styled.h1`
    font-family: 'playball', cursive;
    ${({ header }) => header ? `
        width: 97px;
        height: 49px;
        color: rgba(255, 255, 255, 1);
        font-size: 38.98px;
    `: `
        width: 180px;
        height: 86.23px;
        color: rgba(18, 107, 165, 1);
        font-size: 68.98px;
    ` };
`;

export default Title;