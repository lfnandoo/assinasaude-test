import React from "react";
import {
  Container,
  ListItem,
  Date,
  Infos,
  Hour,
  Content,
  Title,
  Troubles,
} from "./styles";
import clock from "../../assets/clock.svg";

export default function Charts({ postData }) {
  return (
    <Container>
      {postData.map((post, index) => (
        <ListItem key={index}>
          <Date>
            <h1>24</h1>
            <h2>AGO</h2>
            <h3>2020</h3>
          </Date>
          <Infos>
            <Hour>
              <img alt="clock" src={clock} />
              <p>18:40</p>
            </Hour>
            <Title>
              <p>Anamnese</p>
            </Title>
            <Content>
              <div>
                <h1>Queixa Principal</h1>
                <p>{post.queixa.label}</p>
              </div>
              <Troubles>
                <h1>Doenças Adulto</h1>
                <ul>
                  {post.doencas.map((doenca, i) => (
                    <li key={i}>
                      <p>{doenca.label}</p>
                    </li>
                  ))}
                </ul>
              </Troubles>
              <div>
                <h1>Histórico da moléstia</h1>
                <p>{post.historico}</p>
              </div>
            </Content>
          </Infos>
        </ListItem>
      ))}
    </Container>
  );
}
