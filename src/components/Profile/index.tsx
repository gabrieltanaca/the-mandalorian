import React from "react";

import { Container } from "./styles";

interface ProfileProps {}

const Profile = () => {
  return (
    <Container>
      <div className="profileContainer">
        <img src="ProfileImage.png" alt="Profile" />

        <div className="profileName">
          <p>Gabriel Tanaca</p>
          <p className="title">Desenvolvedor Front-End</p>
        </div>
      </div>
    </Container>
  );
};
export default Profile;
