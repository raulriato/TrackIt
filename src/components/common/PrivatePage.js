import styled from "styled-components";
import { useLocal } from "../../hooks/useLocal";
import Header from "./Header";


export default function PrivatePage({ children }){

const { image } = useLocal();

    return  (
        <Wrapper>
            <Header userImage={image} />
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    background-color: rgb(242, 242, 242);
`;