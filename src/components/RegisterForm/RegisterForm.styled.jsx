import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  color: #1976d2;
`;

export const Form = styled.form`
  width: 420px;
  display: flex;
  flex-direction: column;
  border: 1px solid #1976d2;
  padding: 10px;
  margin-top: 0;
  border-radius: 8px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 20px;
`;

export const Text = styled.p`
  text-align: center;
  margin: 20px;
`;
