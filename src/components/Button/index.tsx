import React from "react";

import { Container } from "./styles";

interface ButtonProps {
  title: string;
  whiteButton?: boolean;
  className?: string;
  link?: string;
}

const Button = ({ title, whiteButton, className, link }: ButtonProps) => {
  return (
    <Container className={className}>
      <a href={link}>
        <button
          style={{
            backgroundColor: whiteButton ? "transparent" : "",
            borderColor: whiteButton ? "#fff" : "",
            color: whiteButton ? "#fff" : "",
          }}
        >
          <p>{title}</p>
        </button>
      </a>
    </Container>
  );
};
export default Button;
