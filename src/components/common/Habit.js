import styled from "styled-components";
import { useState } from "react";
import Input from "./Input";
import Day from "./Day";
import Button from "./Button";
import { postNewHabit, deleteHabit, getTodayHabits } from "../../services/trackIt";
import { useLocal } from "../../hooks";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Habit({ create, today, name, days, setCreateDisabled, setHabits, habits, habitId, ongoingCreate, setOngoingCreate }) {

    const { token } = useLocal();
    const { setPercentage } = useContext(UserContext);
    const navigate = useNavigate();

    const [disabled, setDisabled] = useState(false);
    const [habitInfo, setHabitInfo] = useState({ ...ongoingCreate })

    const verifyMarkedDay = index => days?.filter(day => day === index).length > 0;
    const week = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    function handleInput(e) {
        setHabitInfo({
            ...habitInfo,
            [e.target.name]: e.target.value
        })

        setOngoingCreate({
            ...ongoingCreate,
            [e.target.name]: e.target.value
        })
    }

    function handleSave() {

        if (habitInfo.days.length === 0 || habitInfo.name === '') {

            alert('Você precisa preencher o nome do hábito e selecionar ao menos um dia para criá-lo');

        } else {

            setDisabled(!disabled);
            const body = habitInfo;


            postNewHabit(body, token).then(response => {
                setHabits([...habits, response.data]);
                setCreateDisabled(false);
                setOngoingCreate({
                    ...ongoingCreate,
                    name: '',
                    days: []
                })

                getTodayHabits(token).then(response => {
                    const doneHabitsFromAPI = response.data.filter(habit => !!habit.done)
                    const allHabitsFromAPI = response.data
                    setPercentage(Math.ceil(((doneHabitsFromAPI.length)/allHabitsFromAPI.length)*100));
                })
        
                .catch(() => {
                    alert('Algo deu errado, faça login novamente');
                    localStorage.removeItem('trackitImage');
                    localStorage.removeItem('trackitToken');
                    navigate('/login')
                });
            })

                .catch(() => {
                    alert('não foi possível criar o hábito! Preencha os dados corretamente');
                    setDisabled(false);
                })
        }
    }

    function handleDelete() {
        if (window.confirm('Você realmente deseja apagar esse hábito?')) {
            deleteHabit(token, habitId).then(() => {
                setHabits(habits.filter(habit => habit.id !== habitId));

                getTodayHabits(token).then(response => {
                    const doneHabitsFromAPI = response.data.filter(habit => !!habit.done)
                    const allHabitsFromAPI = response.data
                    setPercentage(Math.ceil(((doneHabitsFromAPI.length)/allHabitsFromAPI.length)*100));
                })
        
                .catch(() => {
                    alert('Algo deu errado, faça login novamente');
                    localStorage.removeItem('trackitImage');
                    localStorage.removeItem('trackitToken');
                    navigate('/login')
                });
            })
        }
    }

    return (
        <Wrapper create={create} >
            {
                create ?
                    <>
                        <Input
                            placeholder="nome do hábito"
                            name='name'
                            onChange={handleInput}
                            value={habitInfo.name}
                            disabled={disabled}
                        />
                        <span>
                            {week.map((day, index) => {
                                return (
                                    <Day
                                        key={index}
                                        i={index}
                                        habitInfo={habitInfo}
                                        setHabitInfo={setHabitInfo}
                                        disabled={disabled}
                                        ongoingCreate={ongoingCreate}
                                        setOngoingCreate={setOngoingCreate}
                                        markedDay={verifyMarkedDay(index)}
                                    >
                                        {day}
                                    </Day>
                                )
                            })}
                        </span>
                        <div>
                            <span onClick={() => setCreateDisabled(false)}>Cancelar</span>
                            <Button disabled={disabled} onClick={handleSave} >{disabled ? <ThreeDots color='white' width={30} height={30} /> : 'Salvar'}</Button>
                        </div>
                    </>
                    :
                    <>
                        <span>{name}</span>
                        <span>
                            {week.map((day, index) => {

                                return (
                                    <Day
                                        key={index}
                                        markedDay={verifyMarkedDay(index)}
                                        buttonOff
                                    >
                                        {day}
                                    </Day>
                                )
                            }
                            )}
                        </span>
                        <ion-icon name="trash-outline" onClick={handleDelete}></ion-icon>
                    </>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 91px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 18px 0 0 19px;
    margin-bottom: 10px;

    div {
        width: 100%;
        height: 35px;
        display: flex;
        justify-content: end;
        align-items: center;
        margin-top: 29px;
    }

    div > span {
        font-size: 15.98px;
        color: rgba(82, 182, 255, 1);
    }

    ion-icon[name="trash-outline"] {
        width: 13px;
        height: 15px;
        position: absolute;
        top: 11px;
        right: 10px;
    }

    ${({ create }) => create ? `
        height: 180px;
        margin-bottom: 29px;
    `: ''}

    div > button {
        margin: 0 16px 0 23px;
    }
`;