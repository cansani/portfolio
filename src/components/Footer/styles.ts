import styled from "styled-components";

export const FooterContainer = styled.a`
    width: 100%;
    max-width: 1120px;
    margin: 5.4rem auto;
    padding: 0 1.5rem;

    text-decoration: none;

    cursor: pointer;

    &:hover {
        span {
            color: ${props => props.theme["zinc-50"]};
        }
    }

    background-color: ${props => props.theme["zinc-900"]};
    border-radius: 1.6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    height: 50vh;

    span {
        color: ${props => props.theme["zinc-400"]};
        font-size: 3.5rem;
    }

    p {
        color: ${props => props.theme["zinc-400"]};
        font-size: 1.5rem;
    }

    @media (max-width: 1024px) {
        margin: 5.4rem 0rem;
        height: 35vh;
    }
`
