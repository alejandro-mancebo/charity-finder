import {useState} from 'react'
import styled from 'styled-components'


const SearchStyle = styled.div`
  display: flex;
  margin: .5rem 0;
  text-align: center;
  font-size: 1.2em;
  font-weight: 600;

  input {
    border-radius:  8px 0 0 8px;
    width: 25rem;
    border: 0;
    padding: .25rem 1rem;
    padding-right: 1rem;
    outline: none;
  }

  button {
    border-radius:  0 8px 8px 0;
    border: 0;
 
    padding: 0.25rem 1.5em;
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
  }
`;


export const Search = () => {
  const [searchInput, setSearchInput] = useState<string>('')


  return (
    <SearchStyle>
      <div className="">
        <input 
        type="search"
         placeholder="Search" 
         aria-label="Search" 
         value={searchInput}
         onChange={e => setSearchInput(e.target.value)}
         aria-describedby="search-addon" />
        <button type="button" >search</button>
      </div>
    </SearchStyle>
  )
}
