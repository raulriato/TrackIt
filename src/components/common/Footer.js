import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Footer() {

    const navigate = useNavigate();
    const { percentage } = useContext(UserContext);

    return (
        <Wrapper>
            <span onClick={() => navigate('/')}>Hábitos</span>
            <TodayDiv onClick={() => navigate('/today')}>
                <CircularProgressbar
                    value={percentage}
                    text={`Hoje`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        strokeLinecap: 'round',
                        backgroundColor: "rgba(75, 170, 255, 1)",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                />
            </TodayDiv>
            <span onClick={() => navigate('/history')}>Histórico</span>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(75, 170, 255, 1);
    font-size: 17.98px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 33.5px;
    position: fixed;
    bottom: 0;
    left: 0;
`;

const TodayDiv = styled.div`
    width: 91px;
    height: 91px;
    color: rgba(255, 255, 255, 1);
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