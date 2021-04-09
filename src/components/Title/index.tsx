import React from "react";
import Button from "../Button";

import { Container } from "./styles";

const Title: React.FC = () => {
  return (
    <Container>
      <div className="title">
        <div className="Manda">
          <h1>The Manda</h1>
        </div>
        <div className="Lorian">
          <p>lorian</p>
        </div>
      </div>

      <div className="buttons">
        <Button title="Watch On Disney+" />
        <Button title="Watch the trailer" whiteButton className="whiteButton" />
      </div>
    </Container>
  );
};

export default Title;
