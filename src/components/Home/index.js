import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <p>Nenhum prontuário cadastrado.</p>
      <Link to="/criar">Adicionar novo prontuário</Link>
    </Container>
  );
}

export default Home;
