import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 8vh;

    display: flex;
    align-items: center;

`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: ${props => props.theme["zinc-400"]};
        font-size: 2rem;
        text-decoration: none;
    }

    a:hover {
        color: ${props => props.theme["zinc-50"]};
    }

    button {
        border: none;
        background: transparent;
        cursor: pointer;

        color: ${props => props.theme["zinc-400"]};
    }

    button:hover {
        color: ${props => props.theme["zinc-50"]};
    }
`