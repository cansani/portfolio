import styled from "styled-components";

export const CardContainer = styled.a`
  position: relative;

  cursor: pointer;

  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    width: 100%;
    height: 100%;
    transition: filter 0.3s;
    object-fit: cover;
  }

  &:hover img {
    filter: blur(1rem);
  }

  &:hover > div {
    opacity: 1;
  }
`;

export const HoverRender = styled.div`
  position: absolute;

  top: 2rem;  
  left: 2rem; 
  color: #fafafa;

  font-size: 1.75rem;
  font-weight: 600;


  opacity: 0;
  transition: opacity 0.3s;
  padding: 1rem; 
`;
