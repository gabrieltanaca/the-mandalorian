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
`;
