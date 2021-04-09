import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  align-items: center;
  padding-left: 25%;

  grid-area: profile;

  .profileContainer {
    display: flex;
    flex-direction: row;
  }

  .profileTitle {
    p {
      font-size: 24px;
      color: #ffffff;
    }
    .title {
      font-family: "Roboto Condensed", sans-serif;
      font-weight: 400;
      font-size: 18px;
      color: #9ea8ab;
    }
  }

  img {
    height: 6vh;
    border-radius: 50px;
    margin-right: 10px;
  }
`;
