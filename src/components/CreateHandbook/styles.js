import styled from "styled-components";

export const Container = styled.div`
  font-size: 0.8rem;
  margin-top: 20px;
  background-color: #f2f2f2;

  @media (min-width: 768px) {
    max-width: 80%;
    margin: 10px auto;
  }

  @media (min-width: 1024px) {
    max-width: 60%;
    margin: 10px auto;
  }
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

  > textarea {
    resize: none;
    outline: none;
    border: 0;
    border-radius: 5px;
    background-color: #fff;
    color: #999;
    padding: 10px;
    width: 100%;
    height: 30vh;
    margin-top: 5px;
  }
`;

export const TroublesSelected = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  max-width: 40%;

  > p,
  li {
    font-weight: 600;
    color: #333;
    background-color: transparent;
    outline: none;
    border: 0;
    margin-right: 2px;
    list-style: none;
  }
`;

export const FormButton = styled.button`
  display: inherit;
  text-align: center;
  width: 100%;
  margin: auto auto;
  margin-top: 10px;
  padding: 15px 30px;
  background-color: var(--color-main);
  border: 0;
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;
`;

export const Loader = styled.div`
  margin-left: 29vw;
  margin-top: 8vh;
  border: 16px solid var(--color-blue-light);
  border-top: 16px solid var(--color-blue-font);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (min-width: 768px) {
    margin-left: 40vw;
  }
`;
