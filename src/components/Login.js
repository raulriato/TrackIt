import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner'
import { Button, Input, StyledLink } from "./common";
import logo from '../assets/images/logo.png';
import { postLogin } from "../services/trackIt";


export default function Login() {

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

    function handleForm(e) {
        e.preventDefault();
        setDisabled(!disabled);
        postLogin(login).then(response => {
            console.log(response.data);
            localStorage.setItem('trackitToken', JSON.stringify({
                headers: {
                    Authorization: `Bearer ${response.data.token}`
                }
            }))

            localStorage.setItem('trackitImage', response.data.image)
            navigate('/')
        })

        .catch(response => {
            switch(response.response.status){
                case 401:
                    alert('Dados inválidos');
                    setDisabled(false);
                    break;
                
                case 422:
                    alert('Usuário não encontrado');
                    setDisabled(false);
                    break;
                
                default:
                    alert('Dados inválidos');
                    setDisabled(false);
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
                <Button large disabled={disabled}>{disabled ? <ThreeDots color='white' width={45} height={45} /> : 'Entrar'}</Button>
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
    width: 100%;
    height: 100%;

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
        width: 90%;
    }
`;