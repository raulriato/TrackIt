import styled from "styled-components";
import { Button, Input, LinkText } from "./common";
import logo from '../assets/images/logo.png';


export default function Login() {
    return (
        <Wrapper>
            <img src={logo} alt="Loading..." />
            <Input placeholder="email" />
            <Input placeholder="senha" />
            <Button large>Entrar</Button>
            <LinkText>Não tem uma conta? Cadastre-se!</LinkText>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin: 68px 0 40px;
    }

    input {
        margin-bottom: 6px;
    }

    button {
        margin-bottom: 25px;
    }
`;