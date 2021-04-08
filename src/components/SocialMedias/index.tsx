import { ReactNode } from 'react';

import { Container } from './styles';

interface SocialMediasProps {
  children: ReactNode;
}

function SocialMedias({ children }: SocialMediasProps) {
  return (
    <Container>
      <h1>SocialMedias</h1>
      {children}
    </Container>
  );
};

export default SocialMedias;
