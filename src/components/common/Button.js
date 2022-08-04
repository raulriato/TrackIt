import styled from "styled-components";

const Button = styled.button`
    width: 84px;
    height: 35px;
    background-color: rgba(82, 182, 255, 1);
    border-radius: 4.64px;
    font-size: 15.98px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 1);

    ${({ large }) => large ? `
        width: 303px;
        height: 45px;
        font-size: 20.98px;
    `
    : ''}

    ${({ small }) => small ? `
        width: 40px;
        font-size: 26.98px;
    `: ''}
`;

export default Button;