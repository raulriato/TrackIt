import styled from "styled-components";

const Navbar = styled.div`
    width: 100%;
    display: flex;

    ${({ habits }) => habits ? `
        height: 79px;
        justify-content: space-between;
        align-items: center;

        
    `: `
            height: 107px;
            flex-direction: column;
            padding: 28px 0;


    ` }

    span {
        font-size: 17.98px;
        color: ${({ green }) => green ? 'rgba(143, 197, 73, 1)' : 'rgba(186, 186, 186, 1)'};
    }
    
    h1 {
        color: rgba(18, 107, 165, 1);
        font-size: 22.98px;
    }
`;

export default Navbar;