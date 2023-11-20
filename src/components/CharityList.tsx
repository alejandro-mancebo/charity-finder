import { useEffect, useState } from 'react'
import axios from 'axios'
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
  const [charityList, setCharityList] = useState<EveryData[]>([])

  useEffect(() => {
    const getResponse = async () => {
      try {
        const response = await axios.get('https://partners.every.org/v0.2/search/pets?apiKey=pk_live_5174875192aa87643c72e93ad57baabc');
        setCharityList(response.data.nonprofits)
      } catch (error) {
        console.log(error)
      }
    };
    // axios.get('http://partners.every.org/v0.2/search/pets?apiKey=pk_live_5174875192aa87643c72e93ad57baabc')
    //   .then(response => {
    //     setCharityList(response.data.nonprofits)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    getResponse();
  }, [])

  return (

    <Container>
      {charityList.length > 0 ? (
        charityList.map((list) => {
          return (
            <div key={list.ein}>
              <Card charity={list} />
            </div>
          )
        })) : (
        <h4 className="loading">Loading... </h4>
      )
      }
    </Container>
  )
}


