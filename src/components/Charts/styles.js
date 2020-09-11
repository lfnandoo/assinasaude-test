import styled from "styled-components";

export const Container = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Infos = styled.div`
  margin-left: 8px;
  width: 80%;
`;

export const Date = styled.div`
  color: var(--color-blue-font);
  font-weight: normal;
  text-align: center;

  h1 {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 0.8rem;
    font-weight: 500;
  }

  h3 {
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

export const Hour = styled.div`
  background-color: var(--color-blue-font);
  color: #fff;
  display: flex;
  padding: 10px;
  border-radius: 5px 5px 0 0;
  align-items: center;

  > img {
    height: 1.2rem;
    margin-right: 5px;
  }
`;

export const Title = styled.div`
  padding: 7px;
  background-color: var(--color-blue-light);

  > p {
    color: var(--color-blue-font);
    font-weight: bold;
  }
`;

export const Content = styled.div`
  background-color: #f2f2f2;
  padding: 20px 10px;
  border-radius: 0 0 5px 5px;

  > div h1 {
    font-size: 0.8rem;
    margin-bottom: 3px;
    font-weight: 700;
  }

  > div p {
    font-size: 0.7rem;
    font-weight: 500;
    margin-bottom: 8px;
  }
`;

export const Troubles = styled.div`
  > ul {
    display: flex;
    flex-wrap: wrap;
  }

  > ul li {
    background-color: var(--color-blue-light);
    border-radius: 10px;
    padding: 3px 10px;
    align-items: center;
    margin-bottom: 8px;
    margin-right: 5px;
    outline: none;
    border: 0;
    list-style: none;
  }

  > ul li p {
    font-size: 0.8rem;
    color: #333;
    font-weight: 600;
    margin-bottom: 0;
  }
`;
