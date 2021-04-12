import styled from "styled-components";

export const TitleContainer = styled.div`
  grid-area: smalltitle;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 7%;

  p {
    font-size: 26px;
    letter-spacing: 0.05em;
    color: #9ea8ab;

    display: flex;
    flex-direction: row;

    p {
      color: #ffffff;
    }
  }
  padding-top: 5%;
  opacity: 0%;

  animation: title 1s 1s ease-out forwards;

  @keyframes title {
    from {
      padding-top: 5%;
      opacity: 0%;
    }
    to {
      padding-top: 0%;
      opacity: 100%;
    }
  }
`;
