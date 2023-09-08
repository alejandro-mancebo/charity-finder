import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { styled } from "styled-components"
import EveryData from "../type/interfaces";

const Container = styled.div`
  position: fixed;
  top: 8em;
  right: 12.5em;

  width: 28em;
  height: 15em;
  padding-top: 1rem;
  border: 1px solid #d4d4d4;
  border-radius: .4em;
  background: #ededed;

  text-align: center;

  a {
    text-decoration: none;
    margin: 0 auto;
  }

  button:hover {
    background-color: #b4b4b4;
  }


  button {
    width: 20em;
    margin: .5rem 2em;
    border-radius: .7rem;
    color: #fff;
    font-weight: 600;
    font-size: 1.2rem;
    background-color: #09BC8A;
    padding: 1rem 2rem;
   
  }

  .remove {
    background-color: red;
  }

  .add {
    background-color: #09BC8A;
  }

 .show {
    font-weight: 600;
    color: #970505;
    height: 2.5rem;
  }
`


interface Props {
  charity: EveryData;
  addToFavourites: (e: boolean) => void;
  removeFromFavourites: (e: boolean) => void;
  isAdded: boolean;
}


export const SideView = ({ charity, addToFavourites, removeFromFavourites, isAdded }: Props) => {

  const [isAddedCharity, setIsAdded] = useState<boolean>(isAdded);
  const [isremoveCharity, setIsRemoved] = useState<boolean>(isAdded);



  const HandleAddToFavourite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setIsAdded(true)
    addToFavourites(true)
  }


  const HandleRemoveFromFavourite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setIsRemoved(true)
    removeFromFavourites(true)
  }

  return (
    <Container>
      {
        isAdded ? 
          <div className="show">This Charity was Added To Your Favorite!</div>
          : <div className="show"></div>
      }

      {isAdded ? (
        <button className="remove"
          onClick={HandleRemoveFromFavourite}>
          Remove from favorites
        </button>
      ) : (
        <button className="add" onClick={(e) => HandleAddToFavourite(e)}>Add to favorites</button>
      )}

      <Link to={charity.profileUrl}>
        <button className="link">Check it in Every.org</button>
      </Link>
    </Container>
  )
}
