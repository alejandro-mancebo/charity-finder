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

  // .link {
  //   margin: 2rem ;
  //   // width: fit-content;
  //   border-radius: .7rem;
  //   color: #fff;
  //   font-weight: 600;
  //   font-size:1.2rem;
  //   background-color: #09BC8A;
  //   padding: 1rem 2rem;
    
  //   text-aligh: center;
  // }

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
  profileUrl: string;
}


export const SideView = ({ profileUrl }: Props) => {
  console.log('profileUrl', profileUrl)
  return (
    <Container>

      <Link to={"/favorites"}><button className="link">Add to favorites</button></Link>

      <Link to={profileUrl}><button className="link">Check it in Every.org</button></Link>


    </Container>
  )
}
