import React from "react";

import { Container } from "./styles";

interface ButtonProps {
  title: string;
  whiteButton?: boolean;
  className?: string;
}

const Button = ({ title, whiteButton, className }: ButtonProps) => {
  return (
    <Container className={className}>
      <button
        style={{
          backgroundColor: whiteButton ? "transparent" : "",
          borderColor: whiteButton ? "#fff" : "",
          color: whiteButton ? "#fff" : "",
        }}
      >
        <p>{title}</p>
      </button>
    </Container>
  );
};
export default Button;
