import React from "react";
import { Container, Title, Form } from "./styles";
import Selects from "../Selects";

export default function CreateHandbook() {
  const url = "http://localhost:3001";
  const [complaintData, setComplaintData] = React.useState([]);
  const [troubleData, setTroubleData] = React.useState([]);
  const [complaint, setComplaint] = React.useState(true);
  const [troubles, setTroubles] = React.useState([]);

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
        <Selects
          data={complaintData}
          label="Queixa Principal"
          requiredTrue="required"
          valueId={complaint}
          setValue={setComplaint}
        />
        <Selects
          data={troubleData}
          label="Doenças Adulto"
          troubles={troubles}
          setValue={setTroubles}
        />
      </Form>
    </Container>
  );
}
