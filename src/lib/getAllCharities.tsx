import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Link } from 'react-router-dom'


interface EveryData {
  nonprofits: any[];
  ein: string;
  name: string;
  profileUrl: string;
  logoUrl?: string;
  coverImageUrl?: string;
  matchedTerms: string[];
  slug: string;
  location: string;
  tags: string[];
}

export default function getAllCharities() {
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
    <>
      <div>
        {
          posts.map((post) => {
            return (

              <div key={post.ein}>

                {post.coverImageUrl &&
                  <img src={post.coverImageUrl} alt="Girl in a jacket" width="100" height="100"></img>
                }
                {post.logoUrl &&
                  <img src={post.logoUrl} alt="Girl in a jacket" width="48" height="48"></img>
                }

                <div><Link to={post.profileUrl}>{post.name}</Link></div>

                <div>{post.description}</div>

                <div>matched Terms:
                  {post.matchedTerms.map((term, i) => {
                    return <span key={i}> {term},</span>
                  })}
                </div>

                <div>Tags:
                  {post.tags.map((tag, i) => {
                    return <span key={i}> {tag},</span>
                  })}
                </div>

                <div>{post.location}</div>

                <hr />
              </div>

            )
          })
        }
      </div>
    </>
  )
}
