import styled from "styled-components";
import { useLocal } from "../hooks/useLocal";
import { getHabits } from "../services/trackIt";
import { useState, useEffect } from "react";
import { Button, Habit } from "./common";
import Navbar from "./Navbar";

export default function Habits() {

    const { token } = useLocal();

    const [habits, setHabits] = useState([]);
    console.log(habits);

    useEffect(() => {
        const config = token
        getHabits(config).then(response => {
            setHabits(response.data);
        })
    }, []);

    return (
        <Wrapper>
            <Navbar>
                <span>Meus hábitos</span>
                <Button small>+</Button>
            </Navbar>
            {habits.length === 0 ? 
                <p>Você não tem nenhum habito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            : habits.map(habit => <Habit name={habit.name} days={habit.days} /> )}  
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 70px;
    padding: 0 17.5px;

    p {
        color: rgba(102, 102, 102, 1);
        font-size: 17.98px;
    }
`;