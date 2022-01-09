import styled from "styled-components";

export const TransactionTable = styled.table`
  width: 300px;
  margin: 30px auto;
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
`;

export const TransactionHead = styled.thead`
  color: #fff;
  background-color: #000;
  text-transform: uppercase;
`;

export const TransactionRow = styled.tr`
  :nth-child(even) td {
    background-color: #ccc9c9;
  }
`;

export const TransactionData = styled.td`
  font-size: 14px;
  text-align: center;
`;
