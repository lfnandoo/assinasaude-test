import styled from "styled-components";

export const Container = styled.div`
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
  background-color: #fff;
  color: #999;
`;

export const Option = styled.option`
  color: #333;
`;
