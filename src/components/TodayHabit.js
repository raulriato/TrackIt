import styled from "styled-components";
import { useLocal } from "../hooks";
import { postCheckHabit, postUncheckHabit } from "../services/trackIt";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { useState } from "react";

export default function TodayHabit({ name, habitId, habits, setHabits, done, currentSequence, highestSequence, doneHabits, setDoneHabits }) {

    const { token } = useLocal();
    const { setPercentage } = useContext(UserContext);
    const [current, setCurrent] = useState(currentSequence);
    const [highest, setHighest] = useState(highestSequence);

    const checked = done;

    function handleClick() {
        if (checked) {
            postUncheckHabit(token, habitId).then(() => {
                
                setHabits(habits.map(habit => habit.id === habitId ? habit = {
                    ...habit,
                    done: false
                } : habit = { ...habit }));
                setDoneHabits(doneHabits.filter(habit => habit.id !== habitId));
                setPercentage(Math.ceil(((doneHabits.length-1)/habits.length)*100));
                setHighest(highest === current ? highest - 1 : highest)
                setCurrent(current - 1);
            })

            // .catch(() => alert('Algo deu errado! Tente novamente'));
        } else {
            postCheckHabit(token, habitId).then(() => {
                setHabits(habits.map(habit => habit.id === habitId ? habit = {
                    ...habit,
                    done: true
                } : habit = { ...habit }));
                setDoneHabits([ ...doneHabits, habits.filter(habit => habit.id === habitId)[0]]);
                setPercentage(Math.ceil(((doneHabits.length+1)/habits.length)*100));
                setHighest(highest === current ? highest + 1 : highest)
                setCurrent(current + 1);
            })

            .catch(() => alert('Algo deu errado! Tente novamente'));
        }
    }

    return (
        <Wrapper checked={checked} current={current} highest={highest} >
            <h1>{name}</h1>
            <div>
                <span>Sequência atual <h4>{`: ${current}`}</h4> </span>
                <span>Seu recorde <h5>{`: ${highest}`}</h5></span>
            </div>
            <ion-icon name="checkbox" onClick={handleClick} ></ion-icon>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    width: 100%;
    height: 94px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
    padding: 12.5px 15px;

    div {
        display: block;
    }

    h1 {
        font-size: 19.98px;
    }

    span, h4, h5 {
        font-size: 12.98px;
        display: flex;
    }
        
    ion-icon {
        width: 69px;
        height: 69px;
        border-radius: 5px;
        color: ${({ checked }) => checked ? 'rgba(143, 197, 73, 1)' : 'rgba(235, 235, 235, 1)'};
        position: absolute;
        top: 13px;
        right: 13px;
    }

    h4 {
        color: ${({ checked }) => checked ? 'rgba(143, 197, 73, 1)' : 'rgba(102, 102, 102, 1)'}
    }

    h5 {
        color: ${({ current, highest }) => current === highest && current !== 0 ? 'rgba(143, 197, 73, 1)' : 'rgba(102, 102, 102, 1)'}
    }
`;