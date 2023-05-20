import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  height: 65px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: black;

  &.active {
    color: red;
  }
`;
