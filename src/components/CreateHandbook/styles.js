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

export const TroublesSelected = styled.div`
  display: flex;
`;

export const TroubleItem = styled.div`
  display: flex;
  color: #333;
  background-color: var(--color-blue-light);
  border-radius: 10px;
  padding: 3px 10px;
  align-items: center;
  margin-top: 8px;
  margin-right: 5px;

  > p,
  li {
    font-weight: 600;
    color: #333;
    background-color: transparent;
    outline: none;
    border: 0;
    margin-right: 2px;
  }
`;
