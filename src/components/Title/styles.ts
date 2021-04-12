import styled from "styled-components";

export const Container = styled.div`
  grid-area: title;
  margin-left: 7%;

  .title {
    display: flex;
    flex-direction: row;

    margin-bottom: 7vh;

    .Manda {
      position: relative;
      overflow: hidden;

      width: 34vw;
      height: 20vh;

      h1 {
        font-size: calc(8px + 8.7vw);

        color: #ffffff;
        -webkit-text-stroke: 2px #ffffff;
        position: absolute;
        top: -106%;

        animation: mando 1.2s 1s ease-out forwards;

        @keyframes mando {
          from {
            top: -106%;
          }
          to {
            top: 0%;
          }
        }
      }
    }
    .Lorian {
      position: relative;
      overflow: hidden;

      width: 21vw;
      height: 20vh;

      p {
        -webkit-text-fill-color: transparent;
        font-size: calc(8px + 8.7vw);
        color: #ffffff;
        -webkit-text-stroke: 2px #ffffff;
        position: absolute;
        top: 87%;

        animation: lorian 1s 1s ease-out forwards;

        @keyframes lorian {
          from {
            top: 87%;
          }
          to {
            top: 0%;
          }
        }
      }
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;

    .whiteButton {
      transition: ease-in 0.6s;

      &:hover {
        background-color: #ffffff;
      }
    }
  }
`;
