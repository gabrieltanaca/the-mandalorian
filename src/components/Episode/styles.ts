import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-area: projects;

  cursor: pointer;

  margin-bottom: 2vw;

  .video {
    width: 16vw;
    height: 9vw;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      margin-top: 5px;
      font-size: 16px;
      letter-spacing: 0.1em;
      color: #ffffff;
    }

    svg {
      width: 3vw;
      height: 3vw;
      transition: all 0.3s;
    }

    &:hover {
      svg {
        width: 3.5vw;
        height: 3.5vw;
      }
    }
  }
`;
