import React from "react";

import { Container } from "./styles";

interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => {
  return (
    <Container>
      <button>{title}</button>
    </Container>
  );
};
export default Button;
