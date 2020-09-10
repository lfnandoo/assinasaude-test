import React from "react";
import {
  Container,
  Title,
  Form,
  TroublesSelected,
  TroubleItem,
  FormButton,
  Loader
} from "./styles";
import Selects from "../Selects";

export default function CreateHandbook({ postData, setPostData }) {
  const url = "https://assina-prontuario.herokuapp.com";
  const [complaintData, setComplaintData] = React.useState([]);
  const [troubleData, setTroubleData] = React.useState([]);
  const [complaint, setComplaint] = React.useState(true);
  const [troubles, setTroubles] = React.useState([]);
  const [history, setHistory] = React.useState("");

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

  function handleSetTrouble(handledTrouble) {
    setTroubles((state) => {
      return state.filter((trouble) => handledTrouble !== trouble);
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`${url}/prontuario`, {
      method: 'post',
      mode: 'no-cors',
      headers: {
        'Content-Type': "application/json"
      },
      body: {
        "queixa": complaint,
        "doencas": troubles,
        "historico": history
      },
    }).then((response) => {
      console.log(response);
      return setPostData([...postData, {
        "queixa": complaint,
        "doencas": troubles,
        "historico": history
      }])
    });
  }

  if (complaintData[0]) {
    return (
      <Container>
        <Title>Anamnese</Title>
        <Form onSubmit={handleSubmit}>
          <Selects
            data={complaintData}
            label="Queixa Principal"
            requiredTrue="required"
            complaintValue={complaint}
            setValue={setComplaint}
          />
          <Selects
            data={troubleData}
            label="Doenças Adulto"
            troubles={troubles}
            setValue={setTroubles}
          />
          <div>
            Selecionados:
          {!troubles[0] && (
              <TroubleItem
                style={{
                  backgroundColor: "darksalmon",
                  color: "#FFF",
                  justifyContent: "center",
                }}
              >
                Nenhuma doença selecionada.
              </TroubleItem>
            )}
          </div>
          <TroublesSelected>
            {troubles &&
              troubles.map((trouble, index) => (
                <TroubleItem key={index}>
                  <p>{troubleData[trouble - 1].label}</p>
                  <li onClick={() => handleSetTrouble(trouble)}>✖</li>
                </TroubleItem>
              ))}
          </TroublesSelected>
          <p style={{ fontWeight: "600", marginTop: "10px" }}>
            Historico da Moléstia
        </p>
          <textarea
            placeholder="Digite..."
            minLength="10"
            maxLength="1000"
            required
            onChange={({ target }) => setHistory(target.value)}
          ></textarea>
          <FormButton>Salvar</FormButton>
        </Form>
      </Container>
    )
  } else {
    return <Loader />
  }
}
