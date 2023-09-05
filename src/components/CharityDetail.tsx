import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Card } from '../components/card'
import EveryData from '../type/interfaces'
import { Link, useParams } from 'react-router-dom'


import styled from 'styled-components'
import { SideView } from './SideView'



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
  const [charity, setCharity] = useState([])

  const { ein } = useParams();

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

      <SideView profileUrl={charity.profileUrl} />
    </>
  )
}


