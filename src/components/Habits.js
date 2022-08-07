import styled from "styled-components";
import { useLocal } from "../hooks";
import { getHabits } from "../services/trackIt";
import { useState, useEffect } from "react";
import { Button, Habit } from "./common";
import Navbar from "./Navbar";

export default function Habits() {

    const { token } = useLocal();

    const [disabled, setDisabled] = useState(false)
    const [habits, setHabits] = useState([]);
    const [noHabits, setNoHabits] = useState('');

    useEffect(() => {
        getHabits(token).then(response => {
            setHabits(response.data);
            setNoHabits('Você não tem nenhum habito cadastrado ainda. Adicione um hábito para começar a trackear!')
        })
    }, []);

    return (
        <Wrapper>
            <Navbar>
                <span>Meus hábitos</span>
                <Button small disabled={disabled} onClick={() => setDisabled(!disabled)} >+</Button>
            </Navbar>
            {disabled ? <Habit create setCreateDisabled={setDisabled} setHabits={setHabits} habits={habits} /> : ''}
            {habits.length === 0 ? 
                <p>{noHabits}</p>
            : habits.map(habit => <Habit key={habit.id} name={habit.name} days={habit.days} /> )}  
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
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