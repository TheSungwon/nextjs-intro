import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({data}) {


  // const [movie, setMoives] = useState([]);

  //`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

  // useEffect(() => {

  //   (async () => {
  //     const data = await (await fetch(`/api/movies`)).json(); //next.config.js > rewrite()에 의해 api key mask + add file .env
  //     setMoives(data.results);
  //   })();


  // }, []);

  console.log(data)

  const router = useRouter();
  // const onClick = (id, title) => {router.push(
  //   {
  //   pathname: `/movies/${id}`,
  //   query: {
  //     id,
  //     title
  //   },
  //   },`/movies/${id}`)}; //2nd parameter로 URL이동 + query //Link는 as 사용
  const onClick = (id, title) => {router.push(`/movies/${title}/${id}`)}


  return (
    <div>
      <div className="container" >
        <Seo title="home"></Seo>
        <h1>hello world</h1>
        <hr />
        {/* {!movie && <h4>loading...</h4>} */}
        {data.results?.map((e) => (
          
          <div key={e.id} className="movie" onClick={()=>onClick(e.id, e.original_title)}>
            <img src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} />
            {/* <Link as={`/movies/${e.id}`}
             href={{
              pathname: `/movies/${e.id}`,
              query: { id:e.id, title:e.original_title },
            }}> */}
            <Link href={`/movies/${e.original_title}/${e.id}`}>
              <h4>{e.original_title}</h4>
            </Link>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
        .movie{
          cursor:pointer;
        }
      `}</style>
    </div>

  )
}



export async function getServerSideProps() { //serverside 
  const data = await (await fetch(`http://localhost:3000/api/movies`)).json(); //next.config.js
  return {
    props:  {
      data
    }
  }

}