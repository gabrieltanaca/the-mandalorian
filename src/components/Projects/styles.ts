import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .title {
    display: flex;
    align-self: flex-start;

    padding-bottom: 2%;

    font-size: 20px;
    letter-spacing: 0.1em;
    color: #9ea8ab;

    position: relative;
    right: 10%;
    opacity: 0%;

    animation: title 1s 1s ease-out forwards;

    @keyframes title {
      from {
        right: 10%;
        opacity: 0%;
      }
      to {
        right: 0%;
        opacity: 100%;
      }
    }
  }
`;
