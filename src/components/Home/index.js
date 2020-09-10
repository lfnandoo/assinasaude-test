import React from "react";
import { Link } from "react-router-dom";
import Charts from "../Charts";

import { Container } from "./styles";

function Home({ postData }) {
  return (
    <Container>
      {postData[0] ? <Charts postData={postData} /> : <p>Nenhum prontuário cadastrado.</p>}
      <Link to="/criar">Adicionar novo prontuário</Link>
    </Container>
  );
}

export default Home;
