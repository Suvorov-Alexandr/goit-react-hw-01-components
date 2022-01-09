import styled from "styled-components";

export const FriendList = styled.ul`
  width: 300px;
  margin: 30px auto;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 8px 16px;
  border: 1px solid blue;
  border-radius: 5px;
  margin-bottom: 10px;
  :hover {
    transition: transform 0.3s;
    transform: scale(1.1);
  }
`;

export const StatusOnline = styled.span`
  background-color: green;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const StatusOffline = styled(StatusOnline)`
  background-color: red;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-left: 15px;
`;
