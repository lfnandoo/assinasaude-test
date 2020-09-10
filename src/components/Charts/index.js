import React from 'react'
import { Container, ListItem } from './styles'

export default function Charts({ postData }) {
  return (
    <Container>
      {postData.map((post, index) =>
        <ListItem key={index}>
          <h2>Queixa Principal</h2>
          <p>{post.queixa}</p>
          {post.doencas && <h2>Doenças Adulto</h2>}
          {post.doencas && <p>{post.doencas}</p>}
          <h2>Historico da moléstia</h2>
          <p>{post.historico}</p>
        </ListItem>)}
    </Container>
  )
}
