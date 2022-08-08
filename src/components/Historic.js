import styled from "styled-components";
import Navbar from './Navbar';

export default function Historic(){
    return (
        <Wrapper>
            <Navbar habits>
                <h1>Histórico</h1>
            </Navbar>
            <p>Em breve, você poderá ver o histórico dos seus hábitos aqui!</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    margin: 70px 0;
    padding: 0 17.5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p { 
        color: rgba(102, 102, 102, 1);
        font-size: 17.98px;
    }
`;