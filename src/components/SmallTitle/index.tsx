import React from "react";
import { BsList } from "react-icons/bs";
import { TitleContainer } from "./styles";

function SmallTitle() {
  return (
    <>
      <TitleContainer>
        <p>
          The<p>&nbsp;Mandalorian</p>
        </p>
        <div>
          <BsList color="#ffffff" size="2.3vw" />
        </div>
      </TitleContainer>
    </>
  );
}

export default SmallTitle;
