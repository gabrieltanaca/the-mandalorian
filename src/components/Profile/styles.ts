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

  .profileName {
    p {
      font-size: calc(8px + 1vw);
      color: #ffffff;
      letter-spacing: 0.1em;

      position: relative;
      top: 25%;
      opacity: 0%;

      animation: name 1.5s 1.3s ease-in forwards;

      @keyframes name {
        from {
          top: 25%;
          opacity: 0%;
        }
        to {
          top: 0%;
          opacity: 100%;
        }
      }
    }
    .title {
      font-family: "Roboto Condensed", sans-serif;
      font-weight: 400;
      font-size: calc(5px + 1vw);
      color: #9ea8ab;
      letter-spacing: 0em;
    }
  }

  img {
    height: 0vh;
    width: 0vh;
    border-radius: 50px;
    margin-right: 10px;

    animation: profile 1s 1s ease-out forwards;

    @keyframes profile {
      from {
        height: 0vh;
        width: 0vh;
      }
      to {
        height: 7vh;
        width: 7vh;
      }
    }
  }
`;
