import styled from "styled-components";

export const Container = styled.div`
  font-size: 0.8rem;
  margin-top: 20px;
`;

export const Title = styled.h1`
  background-color: var(--color-blue-light);
  color: var(--color-blue-font);
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 5px 5px 0 0;
  padding: 8px;
`;

export const Form = styled.form`
  margin: 10px;
`;

export const FormSelect = styled.div`
  display: grid;
  grid-gap: 6px;
  margin-bottom: 15px;

  > label {
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

export const Select = styled.select`
  padding: 10px;
  border: 0;
  border-radius: 5px;
  background-color: #e2e2de;
  color: #999;
`;

export const Option = styled.option`
  color: #333;
`;
