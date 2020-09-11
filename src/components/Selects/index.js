import React from "react";
import { Container, Select, Option } from "./styles";

export default function Selects({
  data,
  label,
  isRequired,
  complaintValue,
  troubles,
  setValue,
}) {
  function handleSetTrouble(target) {
    if (troubles.includes(target.value)) {
      return;
    } else {
      setValue([...troubles, target.value]);
    }
  }

  if (complaintValue) {
    return (
      <Container>
        <label>{label}</label>
        <Select
          defaultValue=""
          required
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
      <Select value="" onChange={({ target }) => handleSetTrouble(target)}>
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
