import styled from '@emotion/styled';

export const Section = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  gap: 20px;
  margin: 15px 0px;
`;
export const ListItem = styled.li``;
export const Button = styled.button`
  width: 120px;
  height: 40px;
  padding: 5px 20px;
  background: #9bac9b;
  border-radius: 5px;
  border: 1px solid #a18181;
  color: #383131;
  font-size: 20px;
  font-weight: 600;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  transition: scale 650ms ease;
  &:hover {
    scale: 1.05;
    transition: scale 650ms ease;
  }
`;
