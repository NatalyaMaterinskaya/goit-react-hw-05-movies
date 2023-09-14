import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 2px solid #e7e9fc;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;


export const Nav = styled.nav`
  margin-left: 20px;
`;

export const List = styled.ul`
  display: flex;
  gap: 16px;
  list-style-type: none;
`;

export const ListItem = styled.li`
  font-weight: 500;
`;

export const LinkItem = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 16px 0;
  color: #000000;

  &.active {
    color: #ff6347;
  }
`;