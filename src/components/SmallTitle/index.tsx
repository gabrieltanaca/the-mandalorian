import React from "react";
import { BsList } from "react-icons/bs";
import { TitleContainer } from "./styles";

function SmallTitle() {
  return (
    <>
      <TitleContainer>
        <h4>
          The<h4>&nbsp;Mandalorian</h4>
        </h4>
        <div>
          <BsList color="#ffffff" size="2.3vw" />
        </div>
      </TitleContainer>
    </>
  );
}

export default SmallTitle;
