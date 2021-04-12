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
        <Button
          title="Watch On Disney+"
          link="https://www.disneyplus.com/pt-br/home"
        />
        <Button
          title="Watch the trailer"
          whiteButton
          className="whiteButton"
          link="https://www.youtube.com/watch?v=eW7Twd85m2g&ab_channel=StarWars"
        />
      </div>
    </Container>
  );
};

export default Title;
