import styled from "styled-components";

export const Container = styled.div`
  grid-area: title;
  margin-left: 100px;

  h1 {
    display: flex;
    flex-direction: row;
    font-size: 120px;
    color: #ffffff;
    -webkit-text-stroke: 2px #ffffff;
    p {
      -webkit-text-fill-color: transparent;
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;
  }
`;
