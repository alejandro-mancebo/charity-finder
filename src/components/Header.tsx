import { Search } from './Search';
import { Link } from "react-router-dom";

import styled from 'styled-components'

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: black;
  font-weight: 700;
  padding-left: 1em;
  padding-right: 1em;
  line-height: 1.50;

  a {
    text-decoration: none;
  }
`;

const HeaderContainer = styled.div`
  padding: .7em 0;
  position: fixed;
  top: 0;
  width: var(--containerWidth);
  display: flex;
  justify-content: space-between;
  background-color: #09BC8A;
`
const StyledLink = styled(Link)`

  border-radius:  8px 8px ;
  border: 0;
  text-decoration: none;

  padding: 0.5rem 1.5em;
  margin: .5rem 0;
  margin-right: 5rem ;
  color: black;

  background-color: lightgray;
  cursor: pointer;
  transition: background-color .9s;

  &:hover {
    background-color: #b4b4b4;
  }

  &:focus,
  &:focus-visible {
  outline: none;
`

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>
        <Link to={"/"}>Charity Finder</Link></Title>
      <Search />
      <StyledLink to={"/favorites"}>favorites</StyledLink>
    </HeaderContainer>
  )
}
