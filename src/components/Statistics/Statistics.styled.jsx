import styled from "styled-components";
import getRandomHexColor from "./getRandomHexColor";

export const StatisticsContainer = styled.section`
  box-sizing: border-box;
  border: 1px solid blue;
  border-radius: 5px;
  width: 300px;
  margin: 20px auto;
  overflow: hidden;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  padding: 20px 10px;
  margin: 0;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid blue;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  padding: 8px 0;
  background-color: ${getRandomHexColor};
  :not(:first-child) {
    border-left: 1px solid blue;
  }
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const Percentage = styled(Label)``;
