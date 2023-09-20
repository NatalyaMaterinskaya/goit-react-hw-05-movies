import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PrevBtn = styled.div`
  display: inline-block;
  max-width: 180px;
  margin-bottom: 20px;
  padding: 4px 8px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  border: 0;
  border-radius: 2px;

  background-color: #4e4a4a75;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #4e4a4ad9;
  }
  svg {
    margin: 8px 4px -3px 0;
  }
  span {
    display: inline-block;
    padding-bottom: 4px;
  }
`;

export const LinkBtnItem = styled(Link)`
  color: #ffffff;
`;

export const Wrapper = styled.div`
  padding-bottom: 20px;
  display: flex;
  gap: 16px;
  border-bottom: 2px solid #e7e9fc;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const Description = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
`;

export const GenresWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const DetailsList = styled.ul`
  margin-top: 20px;
  list-style-type: none;
`;

export const DetailsItem = styled.li`
  margin-left: 16px;
  margin-bottom: 20px;
`;

export const LinkItem = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  display: inline-block;
  text-decoration: none;
  padding: 4px 0;
  color: #000000;

  &.active {
    color: #ff6347;
  }
`;
