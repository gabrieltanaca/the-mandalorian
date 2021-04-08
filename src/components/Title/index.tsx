import React from "react";
import Button from "../Button";

import { Container } from "./styles";

const Title: React.FC = () => {
  return (
    <Container>
      <h1>
        The Manda<p>lorian</p>
      </h1>
      <div className="buttons">
        <Button title="Watch On Disney+" />
        <Button title="Watch the trailer" />
      </div>
    </Container>
  );
};

export default Title;
