import styled from "styled-components";
import { getTodayHabits } from "../services/trackIt";
import { useState, useEffect } from "react";
import { useLocal } from "../hooks";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import TodayHabit from "./TodayHabit";
import Navbar from "./Navbar";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

export default function Today() {

    const { token } = useLocal();
    const { setPercentage } = useContext(UserContext);
    const navigate = useNavigate();

    

    const [habits, setHabits] = useState([]);
    const [noHabits, setNoHabits] = useState('');
    const [doneHabits, setDoneHabits] = useState([]);

    useEffect(() => {
        getTodayHabits(token).then(response => {

            const doneHabitsFromAPI = response.data.filter(habit => !!habit.done)
            const allHabitsFromAPI = response.data
            setHabits(allHabitsFromAPI);
            setDoneHabits(doneHabitsFromAPI);
            setNoHabits('Você não possui nenhum hábito para hoje! Crie um novo tocando no botão Hábitos');
            setPercentage(Math.ceil(((doneHabitsFromAPI.length)/allHabitsFromAPI.length)*100));
        })

        .catch(() => {
            alert('Algo deu errado, faça login novamente');
            localStorage.removeItem('trackitImage');
            localStorage.removeItem('trackitToken');
            navigate('/login')
        });
    }, [])


    return (
        <Wrapper>
            <Navbar green={doneHabits.length > 0} >
                <h1>{dayjs().format('dddd, DD/MM')}</h1>
                <span>{doneHabits.length > 0 ? `${Math.ceil((doneHabits.length/habits.length)*100)}% dos hábitos concluídos` : 'Nenhum hábito concluído ainda'}</span>
            </Navbar>
            {habits.length === 0 ?
                <p>{noHabits}</p>
                : habits.map(habit => (
                    <TodayHabit
                        key={habit.id}
                        done={habit.done}
                        currentSequence={habit.currentSequence}
                        highestSequence={habit.highestSequence}
                        name={habit.name}
                        habitId={habit.id}
                        habits={habits}
                        setHabits={setHabits}
                        doneHabits={doneHabits}
                        setDoneHabits={setDoneHabits}
                        setNoHabits={setNoHabits}
                    />
                ))}
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
    overflow-y: auto;
`;