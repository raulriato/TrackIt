import styled from "styled-components";

export default function Footer() {

    return (
        <Wrapper>
            <span>Hábitos</span>
            <TodayButton>Hoje</TodayButton>
            <span>Histórico</span>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(82, 182, 255, 1);
    font-size: 17.98px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 33.5px;
    position: fixed;
    bottom: 0;
    left: 0;
`;

const TodayButton = styled.button`
    width: 91px;
    height: 91px;
    background-color: rgba(82, 182, 255, 1);
    color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 50%;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 17.98px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 10px;
    left: calc(50% - 91px/2);
`;