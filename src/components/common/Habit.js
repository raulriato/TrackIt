import styled from "styled-components";
import { useState } from "react";
import Input from "./Input";
import Day from "./Day";
import Button from "./Button";

export default function Habit({ create, name, days }) {
    const [disabled, setDisabled] = useState(false);
    const [habitInfo, setHabitInfo] = useState({
        name: '',
        days: []
    })

    function handleInput(e) {
        setHabitInfo({
            ...habitInfo,
            [e.target.name]: e.target.value
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
                            <Day>D</Day>
                            <Day>S</Day>
                            <Day>T</Day>
                            <Day>Q</Day>
                            <Day>Q</Day>
                            <Day>S</Day>
                            <Day>S</Day>
                        </span>
                        <div>
                            <span>Cancelar</span>
                            <Button>Salvar</Button>
                        </div>
                    </>
                    :
                    <>
                        <span>Ler 1 capítulo de um livro</span>
                        <span>
                            <Day>D</Day>
                            <Day>S</Day>
                            <Day>T</Day>
                            <Day>Q</Day>
                            <Day>Q</Day>
                            <Day>S</Day>
                            <Day>S</Day>
                        </span>
                        <ion-icon name="trash-outline"></ion-icon>
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
        width: 176px;
        height: 35px;
        position: absolute;
        bottom: 15px;
        right: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
`;