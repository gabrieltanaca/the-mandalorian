import styled from "styled-components";

export const Container = styled.div`
  margin-right: 3.5%;

  button {
    width: 0vw;
    height: 10vh;
    background-color: #0b0b0f;

    border: 0px solid #0b0b0f;

    transition: ease-in-out 0.6s;

    animation: button 2s 1s ease-in-out 1 forwards;

    @keyframes button {
      from {
        width: 0vw;
        border-width: 0px;
      }
      to {
        width: 20vw;
        border-width: 3px;
      }
    }

    p {
      color: #ffffff;
      font-size: calc(8px + 1vw);
      letter-spacing: 0.1em;

      opacity: 0%;

      transition: ease-in 0.6s;

      animation: text 1s 2.5s linear 1 forwards;

      @keyframes text {
        from {
          opacity: 0%;
        }
        to {
          opacity: 100%;
        }
      }
    }

    &:hover {
      background-color: #ffffff;
      border: 3px solid #ffffff;
      p {
        color: #0b0b0f;
      }
    }
  }
`;
