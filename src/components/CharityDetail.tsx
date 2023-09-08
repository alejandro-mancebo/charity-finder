import { useEffect, useState } from 'react'
import axios from 'axios'
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

  .location {
    margin: .5rem 0;
    font-size: .9rem;
  }
`


export const CharityDetail: React.FC = () => {

  const storeCharityList: string | null = localStorage.getItem('favouritecharityList');
  let initialCharityList: EveryData[];
  if (storeCharityList) {
    initialCharityList = JSON.parse(storeCharityList)
  } else {
    initialCharityList = []
  }

  const { charityEin } = useParams();

  invariant(charityEin)

  const [favouritecharityList, setFavouritecharityList] = useState<EveryData[]>(initialCharityList);
  const [charity, setCharity] = useState<EveryData>();
  const [isAdded, setIsAdded] = useState<boolean>(false);


  useEffect(() => {
    axios.get(`https://partners.every.org/v0.2/search/${charityEin}?apiKey=pk_live_5174875192aa87643c72e93ad57baabc`)
      .then((response) => {
        setCharity(response.data.nonprofits[0])
        if (findCharity(charityEin) !== -1) {
          setIsAdded(true)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [charityEin])


  useEffect(() => {
    if (favouritecharityList.length > 0) {
      localStorage.setItem('favouritecharityList', JSON.stringify(favouritecharityList))
    } else {
      localStorage.clear();
    }
  }, [favouritecharityList])


  const HandleAddFavourite = (toAdd: boolean) => {
    if (toAdd) {
      setIsAdded(toAdd)
      if (favouritecharityList.length > 0) {
        if (findCharity(charity.ein) === -1) {
          setFavouritecharityList([...favouritecharityList, charity]);
        }
      } else {
        setFavouritecharityList([charity]);
      }
    }
  }


  const HandleRemoveFromFavourite =(toRemove: boolean) => {
    if(toRemove) {
      const index: number = findCharity(charity.ein) ;
        if (index > -1) {
          favouritecharityList.splice(index, 1);
          setFavouritecharityList([...favouritecharityList])
          setIsAdded(false)
        }
    }
  }


  function findCharity(charityEin: string): any {
    const result = favouritecharityList.findIndex((element) => { return element.ein === charityEin });
    console.log('findcharity result', result)
    return result;
  }

  function invariant(value: unknown): asserts value {
    if (value) return;

    throw new Error("Invariant violation");
  }


  return (
    <>
      <h3>Details</h3>
      <Container>
        {charity && (
          <>
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

            <div className="">Tags:
              {charity.tags && charity.tags.map((tag, i) => {
                return <span key={i}> {tag},</span>
              })}
            </div>

            <SideView
              charity={charity}
              addToFavourites={HandleAddFavourite}
              removeFromFavourites={HandleRemoveFromFavourite}
              isAdded={isAdded}
            />
          </>
        )}
      </Container >
    </>
  )
}


