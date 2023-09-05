import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Card } from '../components/card'
import EveryData from '../type/interfaces'

import styled from 'styled-components'


const Container = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .loading {
    margin: 2em;
    text-align: centre;
  }
`

export const CharityList = () => {
  const [posts, setposts] = useState([])

  useEffect(() => {
    axios.get<EveryData[]>('https://partners.every.org/v0.2/search/pets?apiKey=pk_live_5174875192aa87643c72e93ad57baabc')
      .then((res: AxiosResponse<EveryData[]>) => {
        console.log(res)
        setposts(res.data.nonprofits)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (

    <Container>
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <div key={post.ein}>
              <Card charity={post} />
            </div>
          )
        })) : (
        <h4 className="loading">Loading... </h4>
      )
      }
    </Container>

  )
}


