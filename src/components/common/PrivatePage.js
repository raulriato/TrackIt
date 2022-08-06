import styled from "styled-components";
import { useLocal } from "../../hooks/useLocal";
import Footer from "./Footer";
import Header from "./Header";


export default function PrivatePage({ children }){

const { image } = useLocal();

    return  (
        <Wrapper>
            <Header userImage={image} />
            {children}
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: calc(100vh - 140px);
    background-color: rgb(242, 242, 242);
`;