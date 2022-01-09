import styled from "styled-components";

export const ProfileContainer = styled.div`
  text-align: center;
  background-color: #fff;
  margin: 20px auto;
  width: 300px;
  border: 1px solid blue;
  border-radius: 5px;
  overflow: hidden;
`;

export const Description = styled.div`
  padding-top: 20px;
`;

export const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  display: block;
  margin: 0 auto 20px;
`;

export const Name = styled.p`
  padding-top: 20px;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Tag = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin: 5px 0;
  color: gray;
`;

export const Location = styled(Tag)``;

export const Stats = styled.ul`
  display: flex;
  background-color: #ddd;
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
  border-radius: 0 0 5px 5px;
  border-top: 1px solid blue;
`;

export const StatsList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 33%;
  font-size: 16px;
  border-left: 1px solid blue;
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 18px;
`;
