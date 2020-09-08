import React from "react";
import { Container, Title, Form, FormSelect, Select, Option } from "./styles";

export default function CreateHandbook() {
  const url = "http://localhost:3000";
  const [complaintData, setComplaintData] = React.useState([]);
  const [troubleData, setTroubleData] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const apiData = await fetch(`${url}/queixas`);
      const json = await apiData.json();
      setComplaintData(json.data);
    }
    getData();
  }, []);

  React.useEffect(() => {
    async function getData() {
      const apiData = await fetch(`${url}/doencas`);
      const json = await apiData.json();
      setTroubleData(json.data);
    }
    getData();
  }, []);

  return (
    <Container>
      <Title>Anamnese</Title>
      <Form>
        <FormSelect>
          <label>Queixa Principal</label>
          <Select required>
            <Option selected disabled>
              Selecione...
            </Option>
            {complaintData.map((complaint) => (
              <Option key={complaint.id} value={complaint.id} value="">
                {complaint.label}
              </Option>
            ))}
          </Select>
        </FormSelect>
        <FormSelect>
          <label>Doenças Adulto</label>
          <Select>
            <Option selected disabled value="">
              Selecione...
            </Option>
            {troubleData.map((trouble) => (
              <Option key={trouble.id} value={trouble.id}>
                {trouble.label}
              </Option>
            ))}
          </Select>
        </FormSelect>
      </Form>
    </Container>
  );
}
