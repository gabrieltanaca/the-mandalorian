import React from "react";

import { Container } from "./styles";

interface ButtonProps {
  title: string;
  whiteButton?: boolean;
}

const Button = ({ title, whiteButton }: ButtonProps) => {
  return (
    <Container>
      <button
        style={{
          backgroundColor: whiteButton ? "transparent" : "",
          borderColor: whiteButton ? "#fff" : "",
        }}
      >
        {title}
      </button>
    </Container>
  );
};
export default Button;
