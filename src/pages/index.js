import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function a() {

  
  const [movie, setMoives] = useState([]);

  //`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

  useEffect(()=>{

    (async ()=>{
      const data = await (await fetch(`/api/movies`)).json();
      setMoives(data.results);
    })();
    

  },[]);

  console.log(movie)


  return (
    <div>
      <div className="container">
      <Seo title="home"></Seo>
      <h1>hello world</h1>
      <hr/>
      {!movie && <h4>loading...</h4>}
      {movie?.map((e)=>(
        <div key={e.id} className="movie">
          <img src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} />
          <h4>{e.original_title}</h4>
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
      `}</style>
    </div>

  )
}

