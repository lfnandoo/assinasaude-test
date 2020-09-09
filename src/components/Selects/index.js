import React from "react";
import { Container, Select, Option } from "./styles";

export default function Selects({
  data,
  label,
  requiredTrue,
  valueId,
  troubles,
  setValue,
}) {
  if (valueId) {
    return (
      <Container>
        <label>{label}</label>
        <Select
          defaultValue=""
          requiredTrue
          onChange={({ target }) => setValue(target.value)}
        >
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
  return (
    <Container>
      <label>{label}</label>
      <Select
        value=""
        onChange={({ target }) => setValue([...troubles, target.value])}
      >
        <Option disabled value="">
          Selecione...
        </Option>
        {data.map((children) => (
          <Option
            key={children.id}
            value={children.id}
            className={children.label}
          >
            {children.label}
          </Option>
        ))}
      </Select>
    </Container>
  );
}
