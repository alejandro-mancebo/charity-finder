import EveryData from '../type/interfaces'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const CardContainer = styled.div`
  
  width: 25rem;
  height: 22rem;
  padding: .7rem;
  margin: 1rem .5rem;
  border: 1px solid #d4d4d4;
  border-radius: 8px;

  .image-container {
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
    height: 12rem;
    object-fit: cover;
    border-radius: 6px;
  }

  .no-image {
    width: 100%;
    height: 12rem;
    border: 1px solid #d4d4d4;
    background: #ededed;
    border-radius: 6px;
  }

  .max-chars {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .location {
    padding: .6rem 0 .4rem 0;
    font-size: .85rem;
  }

  .tag {
    margin-top: .4rem;
  }
`

interface Props {
  charity: EveryData;
}

export const Card = ({ charity }: Props) => {
  return (
    <CardContainer>
      <div className="image-container">
        {charity.coverImageUrl ?
          <img src={charity.coverImageUrl} alt="Girl in a jacket"  ></img>
          : <div className="no-image"></div>
        }
      </div>
      <div className="max-chars">
        <Link to={`/charity/${charity.ein}`}>{charity.name}</Link>
      </div>
      <div className="location">{charity.location}</div>
      <div>
        {charity.matchedTerms && charity.matchedTerms.map((term, i) => {
          return <span key={i}> {term}</span>
        })}
      </div>
      <div className="max-chars tag">Tags:
        {charity.tags && charity.tags.map((tag, i) => {
          return <span key={i}> {tag},</span>
        })}
      </div>
    </CardContainer >
  )
}
