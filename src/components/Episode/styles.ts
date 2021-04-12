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

    position: relative;
    top: 30%;
    opacity: 0%;

    animation: video 0.7s 1s ease-in-out forwards;

    @keyframes video {
      from {
        top: 30%;
        opacity: 0%;
      }
      to {
        top: 5%;
        opacity: 100%;
      }
    }

    p {
      margin-top: 5px;
      font-size: calc(3px + 1vw);
      letter-spacing: 0.1em;
      color: #ffffff;
    }

    svg {
      width: 0vw;
      height: 0vw;
      transition: ease-out 0.5s;
      border-radius: 50px;

      animation: play 1s 1.1s linear forwards;

      @keyframes play {
        from {
          width: 0vw;
          height: 0vw;
        }
        to {
          width: 3.2vw;
          height: 3.2vw;
        }
      }
      &:hover {
        background-color: #fff;
        fill: #0b0b0f;
      }
    }
  }
`;
