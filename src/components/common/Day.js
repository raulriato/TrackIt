import styled from "styled-components";
import { useState } from "react";

export default function Day({ children, i, habitInfo, setHabitInfo, disabled, markedDay, buttonOff, ongoingCreate, setOngoingCreate }) {

    const [selected, setSelected] = useState(false);

    function handleClick() {

        let selectedDays = habitInfo?.days;
        if(!buttonOff){
            if (!selected && !selectedDays.includes[i]) {
                setHabitInfo({
                    ...habitInfo,
                    days: [...selectedDays, i]
                })
                setOngoingCreate({
                    ...habitInfo,
                    days: [...selectedDays, i]
                })
            } else {
                setHabitInfo({
                    ...ongoingCreate,
                    days: selectedDays.filter(day => day !== i)
                })
                setOngoingCreate({
                    ...ongoingCreate,
                    days: selectedDays.filter(day => day !== i)
                })
            }
            setSelected(!selected);
        }

    }

    return (
        <Wrapper selected={selected} markedDay={markedDay} disabled={disabled} onClick={() => {
            handleClick();
        }}>{children}</Wrapper>
    )

}

const Wrapper = styled.button`
    width: 30px;
    height: 30px;
    background-color: inherit;
    border: 1px solid rgba(212, 212, 212, 1);
    border-radius: 5px;
    font-size: 19.98px;
    color: rgba(219, 219, 219, 1);
    margin: 8px 4px 0 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    ${({ selected, markedDay }) => selected || markedDay ? `
        background-color: rgba(207, 207, 207, 1);
        border: none;
        color: rgba(255, 255, 255, 1);
    ` : ''}
`;