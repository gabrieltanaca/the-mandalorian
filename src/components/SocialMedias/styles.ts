import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  overflow: hidden;

  p {
    color: #ffffff;
    letter-spacing: 0.1em;
    cursor: pointer;

    transition: ease-in-out 0.3s;

    position: relative;
    top: 30%;
    opacity: 0%;

    animation: media 1.3s 1s ease-out forwards;

    @keyframes media {
      from {
        top: 30%;
        opacity: 0%;
      }
      to {
        top: 0%;
        opacity: 100%;
      }
    }

    &:hover {
      color: #9ea8ab;
    }
  }
`;
