import { ReactNode } from "react";

import { Container } from "./styles";

interface SocialMediasProps {
  children: ReactNode;
}

function SocialMedias() {
  return (
    <Container>
      <p>Instagram</p>
      <p>Linkedin</p>
      <p>GitHub</p>
    </Container>
  );
}

export default SocialMedias;
