import styled from "styled-components";
import { useState } from "react";

export default function Day({ children }){

    const [selected, setSelected] = useState(false);

    return(
        <Wrapper selected={selected} onClick={() => setSelected(!selected)}>{children}</Wrapper>
    )

}

const Wrapper = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid rgba(212, 212, 212, 1);
    border-radius: 5px;
    font-size: 19.98px;
    color: rgba(219, 219, 219, 1);
    margin: 8px 4px 0 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    ${({ selected }) => selected ? `
        background-color: rgba(207, 207, 207, 1);
        border: none;
        color: rgba(255, 255, 255, 1);
    ` : ''}
`;