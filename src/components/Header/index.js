import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <Link to="/">Prontuário Eletrônico</Link>
    </Container>
  );
}
