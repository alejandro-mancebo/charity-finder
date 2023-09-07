import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import EveryData from '../type/interfaces'
import { Link, useParams } from 'react-router-dom'
import { SideView } from './SideView'


import styled from 'styled-components'



const Container = styled.div`
  
  width: 50rem;
  padding-top: 3em;
  .image-container {
    margin-bottom: 1rem;
  }

  .image {
    width: 100%;
    height: 75%;
    object-fit: cover;
    border-radius: 6px;
  }

  .logo {
    margin-right: 1rem;
  }

  .title {
    padding-top: 0;
  }

  // .max-chars {
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  //   white-space: nowrap;
  // }

  .location {
    margin: .5rem 0;
    font-size: .9rem;
  }
`


export const CharityDetail = () => {
  const [charity, setCharity] = useState([]);

  const storeCharityList: string | null = localStorage.getItem('favouritecharityList');

  let initialCharityList: any[] | any;

  if (storeCharityList) {
    initialCharityList = JSON.parse(storeCharityList)
  } else {
    initialCharityList = []
  }

  const [charityList, setCharityList] = useState<any[]>(initialCharityList);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const { ein } = useParams();



  function findCharity(charity: string): any {
    const result = charityList.find((element) => {
      return element.ein === charity;
    });
    return result;
  }


  useEffect(() => {
    axios.get<EveryData[]>(`https://partners.every.org/v0.2/search/${ein}?apiKey=pk_live_5174875192aa87643c72e93ad57baabc`)
      .then((res: AxiosResponse<EveryData[]>) => {
        console.log(res)
        setCharity(res.data.nonprofits[0])
        console.log(charity.name)
      })
      .catch(error => {
        console.log(error)
      })
  }, [ein])


  useEffect(() => {

    if (charityList.length > 0) {
      localStorage.setItem('favouritecharityList', JSON.stringify(charityList))
    } else {
      localStorage.clear();
    }

  }, [charityList])


  const HandleAddFavourite = (add: boolean) => {

    if (add) {
      setIsAdded(add)
      if (charityList.length > 0) {
        if (!findCharity(charity.ein)) {
          setCharityList([...charityList, charity]);
        }
      } else {
        setCharityList([charity]);
      }
    }
  }


  return (
    <>
      <Container>

        <div className="image-container">
          {charity.coverImageUrl ?
            <img className="image" src={charity.coverImageUrl} alt="Girl in a jacket"  ></img>
            : null
          }
        </div>

        <h1 className="title">
          <span>
            {charity.logoUrl &&
              <img className="logo" src={charity.logoUrl} alt="Girl in a jacket" width="48" height="48"></img>
            }
          </span>

          {charity.name}
        </h1>

        <div className=""><Link to={charity.profileUrl}>{charity.name}</Link></div>

        <div className="location">{charity.location}</div>

        <div>{charity.description && charity.description}</div>

        {/* <div>
        {charity.matchedTerms && charity.matchedTerms.map((term, i) => {
          return <span key={i}> {term},</span>
        })}
      </div> */}

        <div className="">Tags:
          {charity.tags && charity.tags.map((tag, i) => {
            return <span key={i}> {tag},</span>
          })}
        </div>
      </Container >

      <SideView charity={charity} addToFavourites={HandleAddFavourite} isAdded={isAdded} />
    </>
  )
}


