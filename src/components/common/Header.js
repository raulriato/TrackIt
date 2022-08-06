import styled from "styled-components";
import { useLocal } from "../../hooks/useLocal";

export default function Header({ userImage }){

    const { image } = useLocal();
    return (
        <Wrapper>
            <span>TrackIt</span>
            <img src={image} alt='' />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    background-color: rgba(18, 107, 165, 1);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
    font-family: 'playball', cursive;
    font-size: 38.98px;
    color: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
        object-fit: cover;
    }
`;