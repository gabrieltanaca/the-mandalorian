import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;

  p {
    color: #ffffff;
    letter-spacing: 0.1em;
    cursor: pointer;

    transition: ease-in-out 0.3s;

    &:hover {
      color: #9ea8ab;
    }
  }
`;
