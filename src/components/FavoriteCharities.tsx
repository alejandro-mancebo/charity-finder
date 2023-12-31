import { useEffect } from 'react'
import { Card } from '../components/card'
import EveryData from '../type/interfaces'

import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  .loading {
    margin: 2em;
    text-align: centre;
  }
`

export const FavoriteCharities = () => {

  const storeCharityList: string | null = localStorage.getItem('favouritecharityList');

  let charityList: EveryData[] 

  if (storeCharityList) {
    charityList = JSON.parse(storeCharityList)
  } else {
    charityList = []
  }


  useEffect(() => {
    if (charityList.length > 0) {
      localStorage.setItem('favouritecharityList', JSON.stringify(charityList))
    } else {
      localStorage.clear();
    }
  }, [charityList])


  return (
    <>
      <h3>Favorite Charities</h3>
      <Container>
        {charityList.length > 0 ? (
          charityList.map((list: EveryData) => {
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
    </>
  )
}
