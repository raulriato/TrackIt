import styled from "styled-components";

const Button = styled.button`
    font-family: 'Lexend Deca', sans-serif;
    width: 84px;
    height: 35px;
    background-color: rgba(82, 182, 255, 1);
    border-radius: 4.64px;
    font-size: 15.98px;
    position: relative;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;

    ${({ large }) => large ? `
        width: 303px;
        height: 45px;
        font-size: 20.98px;
    `
    : ''}

    ${({ small }) => small ? `
        width: 40px;
        font-size: 26.98px;
        padding-bottom: 4px;
    `: ''}

    ${({ disabled }) => disabled ? `
        opacity: 0.7;
        cursor: initial;

        svg {
            width: 45px;
            height: 45px;
            position: absolute;
            right: calc(50% - 45px/2);
            bottom: calc(50% - 45px/2);
        }
    ` : ''}
`;

export default Button;