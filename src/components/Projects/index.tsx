import { ReactNode } from "react";
import Episode from "../Episode";

import { Container } from "./styles";

function Projects() {
  return (
    <Container>
      <div>
        <p className="title">// EPISÓDIOS</p>
        <Episode cap="1" backgroundImage="episode_1.jpg" />
        <Episode cap="2" backgroundImage="episode_2.jpg" />
        <Episode cap="3" backgroundImage="episode_3.jpg" />
      </div>
    </Container>
  );
}

export default Projects;
