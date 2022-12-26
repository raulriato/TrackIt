import styled from "styled-components";

const Input = styled.input`
    font-family: 'Lexend Deca', sans-serif;
    width: 100%;
    max-width: 303px;
    height: 45px;
    color: rgba(102, 102, 102, 1);
    font-size: 19.98px;
    border: 1px solid rgba(212, 212, 212, 1);
    border-radius: 5px;
    padding-left: 10px;

    &::placeholder {
        color: rgba(219, 219, 219, 1);
    }

    &:focus {
        outline: 0;
    }

    ${({ disabled }) => disabled ? `
        background-color: rgba(242, 242, 242, 1);
        border: 1px solid rgba(212, 212, 212, 1);

        &::placeholder {
            color: rgba(175, 175, 175, 1);
        }
    ` : ''}
`;

export default Input;