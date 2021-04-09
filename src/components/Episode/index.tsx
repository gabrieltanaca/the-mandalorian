import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";

import { Container } from "./styles";

interface EpisodeProps {
  cap: string;
  backgroundImage: string;
}

const Episode = ({ cap, backgroundImage }: EpisodeProps) => {
  return (
    <Container>
      <div
        className="video"
        style={{
          background: `linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.7) 100%
        ),url(${backgroundImage})`,
          backgroundSize: `16vw 9vw`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <AiOutlinePlayCircle color="#ffffff" />

        <p>Episódio #{cap}</p>
      </div>
    </Container>
  );
};
export default Episode;
