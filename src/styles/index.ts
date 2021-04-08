import styled from "styled-components";

export const Background = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(Mandalorian.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;

  height: 100vh;

  display: flex;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 68vw 32vw;
  grid-template-rows: 15vh 45vh 40vh;
  grid-template-areas: "smalltitle profile" ". projects" "title projects";
`;
