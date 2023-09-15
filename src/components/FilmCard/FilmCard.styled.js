import styled from 'styled-components';
export const Btn = styled.button`
  padding: 4px 8px;
  margin-bottom: 20px;
  border-radius: 2px;
  background-color: #4e4a4a75;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  color: #ffffff;
  border: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  max-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #4e4a4ad9;
  }
  svg {
    margin: 8px 4px -1px 0;
  }
  span {
    display: inline-block;
    padding-bottom: 4px;
  }
`;
