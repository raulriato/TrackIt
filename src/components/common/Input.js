import styled from "styled-components";

const Input = styled.input`
    width: 303px;
    height: 45px;
    color: rgba(102, 102, 102, 1);
    font-size: 19.98px;
    border: 1px solid rgba(212, 212, 212, 1);
    padding-left: 10px;

    &::placeholder {
        color: rgba(219, 219, 219, 1);
    }

    &:focus {
        outline: 0;
    }
`;

export default Input;