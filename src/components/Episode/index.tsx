import React from "react";

import { Container } from "./styles";

interface EpisodeProps {
  cap: string;
}

const Episode = ({ cap }: EpisodeProps) => {
  return (
    <Container>
      <div>
        <div className="play">
          <div className="circle">
            <div className="triangle"></div>
          </div>
        </div>

        <h5>Episode - {cap}</h5>
      </div>
    </Container>
  );
};
export default Episode;
