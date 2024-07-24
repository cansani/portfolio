import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;
`

export const ContentTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    height: 60vh;

    span {
        font-size: 3.8rem;
        color: ${props => props.theme["zinc-200"]};

        @media (max-width: 1024px) {
            font-size: 2.8rem;
        }

        @media (max-width: 768px) {
            text-align: center;
            font-size: 4rem;
        }
    }

    
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    a {
        color: ${props => props.theme["zinc-400"]};
    }
    
    a:hover {
        color: ${props => props.theme["zinc-50"]};
    }
`

export const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`