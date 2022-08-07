import styled from "styled-components";
import { useLocal } from "../hooks";
import { useState } from "react";
import { postCheckHabit, postUncheckHabit } from "../services/trackIt";


export default function TodayHabit({ name, habitId, habits, done, currentSequence, highestSequence, doneHabits, setDoneHabits }) {

    const [checked, setChecked] = useState(done);

    return (
        <Wrapper checked={checked} >
            <span>{name}</span>
            <div>
                <p>{`Sequência atual: `}</p>
                <p>{`Seu recorde: `}</p>
            </div>
            <ion-icon name="checkbox" onClick={() => setChecked(!checked)} ></ion-icon>
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
        
    ion-icon {
        width: 69px;
        height: 69px;
        border-radius: 5px;
        color: ${({ checked }) => checked ? 'rgba(143, 197, 73, 1)' : 'rgba(235, 235, 235, 1)'};
        position: absolute;
        top: 13px;
        right: 13px;
    }
`;