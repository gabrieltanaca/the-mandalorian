import styled from "styled-components";

export const Container = styled.div`
  margin-right: 3.5%;

  button {
    width: 19vw;
    height: 10vh;
    background-color: #0b0b0f;

    color: #ffffff;
    font-size: 24px;
    letter-spacing: 0.1em;

    border: 3px solid #0b0b0f;

    transition: all 0.6s;

    &:hover {
      background-color: #ffffff;
      border: 3px solid #ffffff;
      color: #0b0b0f;
    }
  }
`;
