import styled from "styled-components";
import { useState } from "react";
import Input from "./Input";
import Day from "./Day";
import Button from "./Button";
import { postNewHabit, deleteHabit } from "../../services/trackIt";
import { useLocal } from "../../hooks";
import { ThreeDots } from "react-loader-spinner";

export default function Habit({ create, name, days, setCreateDisabled, setHabits, habits, habitId, ongoingCreate, setOngoingCreate }) {

    const { token } = useLocal();

    const [disabled, setDisabled] = useState(false);
    const [habitInfo, setHabitInfo] = useState({ ...ongoingCreate })
    let markedDay;

    const verifyMarkedDay = index => days?.filter(day => day === index).length > 0;
        // for(let i = 0; i < days?.length; i++){
        //     if(days[i] === index){
        //         return true;
        //     }
        // }
        // return false;

        
    

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
        setDisabled(!disabled);
        const body = habitInfo;
        
        postNewHabit(body, token).then(response => {
            setHabits([...habits, response.data]);
            setCreateDisabled(false);
        })

    }

    function handleDelete(){
        deleteHabit(token, habitId).then(() => {
            setHabits(habits.filter(habit => habit.id !== habitId));
        })
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
                            required
                            disabled={disabled}
                        />
                        <span>
                            {week.map((day, index) => {
                                
                                markedDay = verifyMarkedDay(index);
                                return (
                                <Day
                                    key={index}
                                    i={index}
                                    habitInfo={habitInfo}
                                    setHabitInfo={setHabitInfo}
                                    disabled={disabled}
                                    ongoingCreate={ongoingCreate}
                                    setOngoingCreate={setOngoingCreate}
                                    markedDay={markedDay}
                                >
                                    {day}
                                </Day>
                            )})}
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
                                
                                markedDay = verifyMarkedDay(index);

                                return (
                                    <Day
                                        key={index}
                                        markedDay={markedDay}
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
        bottom: 15px;
        right: 16px;
        display: flex;
        justify-content: end;
        align-items: center;
        margin-top: 29px;
    }

    div > span {
        font-size: 15.98px;
        color: rgba(82, 182, 255, 1);
    }

    ion-icon {
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