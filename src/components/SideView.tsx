import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { styled } from "styled-components"

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

  text-align: centre;

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
`

// const StyledLink1 = styled.div`

//   width: 20em;
//   height: 4em;
//   border-radius:  8px 8px ;
//    border: 0;
//    text-decoration: none;

//   // padding: 1rem 4em;

//   color: black;

//   background-color: lightgray;
//   cursor: pointer;
//   transition: background-color .9s;

//   &:hover {
//     background-color: #b4b4b4;
//   }

//   &:focus,
//   &:focus-visible {
//   outline: none;

//   a {
//     text-decoration: none;
//   }
// `


interface Props {
  charity: any;
  addToFavourites: (e: boolean) => boolean;
  removeFromFavourites: (e: boolean) => boolean;
  isAdded: boolean;
}



export const SideView = ({ charity, addToFavourites, removeFromFavourites, isAdded }: Props) => {

  // const storeCharityList: string | null = localStorage.getItem('charityList');

  // let initialCharityList: any[] | any;

  // if (storeCharityList) {
  //   initialCharityList = JSON.parse(storeCharityList)
  // } else {
  //   initialCharityList = []
  // }

  // const [charityList, setCharityList] = useState<any[]>(initialCharityList);
  const [isAddedCharity, setIsAdded] = useState<boolean>(isAdded);
  const [isremoveCharity, setIsRemoved] = useState<boolean>(isAdded);

  // useEffect(() => {

  //   if (charityList.length > 0) {
  //     localStorage.setItem('charityList', JSON.stringify(charityList))
  //   } else {
  //     localStorage.clear();
  //   }

  // }, [charityList])

  // useEffect(() => {
  //   if (findCharity(charity.ein)) {
  //     console.log('findCharity', isAdded)
  //     setIsAdded(true);
  //   } else {
  //     setIsAdded(false);
  //   }

  // }, [])



  // function findCharity(charity: string): any {
  //   const result = charityList.find((element) => {
  //     return element.ein === charity;
  //   });
  //   return result;
  // }

console.log(isAdded)
// e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  const HandleAddToFavourite = () => {
    // e.preventDefault()
    setIsAdded(true)
    addToFavourites(true)
    // if (charityList.length > 0) {
    //   if (!findCharity(charity.ein)) {
    //     setCharityList([...charityList, charity]);
    //   }
    // } else {
    //   setCharityList([charity]);
    // }
  }

  const HandleRemoveFromFavourite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // setIsAdded(false)
    e.preventDefault()
    removeFromFavourites(true)
    console.log("remove charity" )
  }





  // const HandleDeleteFromFavourite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   const index = taskList.findIndex((value) => value.id === e.currentTarget.id)
  //   onDelete(index)
  // }




  return (
    <Container>
      {
        isAdded ?
          <button style={{ backgroundColor: 'red' }} onClick={HandleRemoveFromFavourite}>Remove from favorites</button>
          :
          <button style={{ backgroundColor: '#09BC8A' }} onClick={(e) => HandleAddToFavourite(e)}>Add to favorites</button>
      }

      <Link to={charity.profileUrl}><button className="link">Check it in Every.org</button></Link>
    </Container>
  )
}
