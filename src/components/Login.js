import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner'
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { Button, Input, StyledLink } from "./common";
import logo from '../assets/images/logo.png';


export default function Login() {

    const {config, setConfig } = useContext(UserContext);

    const navigate = useNavigate();

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const [disabled, setDisabled] = useState(false);

    function handleInput(e) {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    function handleForm(e){
        e.preventDefault();
        setDisabled(!disabled);
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', login);
        promise.then(response => {
            setConfig({
                ...config,
                Authorization: config.Authorization += response.data.token
            })
            navigate('/habits')
        })
    }

    return (
        <Wrapper>
            <img src={logo} alt="Loading..." />
            <form onSubmit={handleForm}>
                <Input
                type='email'
                placeholder="email"
                name='email'
                onChange={handleInput}
                value={login.email}
                required
                disabled={disabled}
                />
                <Input
                type='password'
                placeholder="senha"
                name='password'
                onChange={handleInput}
                vallue={login.password}
                required
                disabled={disabled}
                />
                <Button large disabled={disabled}>{disabled ? <ThreeDots color='white' width={45} height={45} /> : 'Entrar' }</Button>
            </form>
            <Link to='/sign-up'>
                <StyledLink>Não tem uma conta? Cadastre-se!</StyledLink>
            </Link>
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

    form {
        display: flex;
        flex-direction: column; 
        align-items: center;
    }
`;