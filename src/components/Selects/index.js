import React from "react";
import { Container, Select, Option } from "./styles";

export default function Selects({ data, label, requiredTrue }) {
  return (
    <Container>
      {console.log(requiredTrue)}
      <label>{label}</label>
      <Select requiredTrue defaultValue="">
        <Option disabled value="">
          Selecione...
        </Option>
        {data.map((children) => (
          <Option key={children.id} value={children.id}>
            {children.label}
          </Option>
        ))}
      </Select>
    </Container>
  );
}
