import React from "react";

import { TitleContainer } from "./styles";

const SmallTitle: React.FC = () => {
  return (
    <>
      <TitleContainer>
        <h4>
          The<h4>&nbsp;Mandalorian</h4>
        </h4>
      </TitleContainer>
      <img
        src="listIcon.svg"
        alt="List Icon"
        style={{
          display: "flex",
          alignSelf: "center",
        }}
      />
    </>
  );
};

export default SmallTitle;
