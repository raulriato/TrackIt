import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner'
import { Button, Input, StyledLink } from "./common";
import logo from '../assets/images/logo.png';



export default function SignUp(){

    const navigate = useNavigate();

    const [signUp, setSignUp] = useState({
        email: '',
        password: '',
        name: '',
        image: ''
    })
    const [disabled, setDisabled] = useState(false);

    function handleInput(e) {
        setSignUp({
            ...signUp,
            [e.target.name]: e.target.value
        })
    }

    function handleForm(e){
        e.preventDefault();
        setDisabled(!disabled);
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', signUp);
        promise.then(response => {
            navigate('/')
        })

        promise.catch(response => {
            if(response.response.status === 409){
                alert('Esse email já possui cadastro');
                setDisabled(false);
                return;
            }
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
                value={signUp.email}
                required
                disabled={disabled}
                />
                <Input
                type='password'
                placeholder="senha"
                name='password'
                onChange={handleInput}
                value={signUp.password}
                required
                disabled={disabled}
                />
                <Input
                type='text'
                placeholder="nome"
                name='name'
                onChange={handleInput}
                value={signUp.name}
                required
                disabled={disabled}
                />
                <Input
                type='text'
                placeholder="foto"
                name='image'
                onChange={handleInput}
                value={signUp.image}
                required
                disabled={disabled}
                pattern={`(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))`}
                />
                <Button large disabled={disabled}>{disabled ? <ThreeDots color='white' width={45} height={45} /> : 'Cadastrar' }</Button>
            </form>
            <Link to='/login'>
                <StyledLink>Já tem uma conta? Faça login!</StyledLink>
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