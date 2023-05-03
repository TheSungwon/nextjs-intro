import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function a() {

  const API_KEY = "10923b261ba94d897ac6b81148314a3f";
  const [movie, setMoives] = useState([]);

  //`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

  useEffect(()=>{

    (async ()=>{
      const data = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();
      setMoives(data.results);
    })();
    

  },[]);

  console.log(movie)


  return (
    <div>
      <Seo title="home"></Seo>
      <h1>hello world</h1>
      <hr/>
      {!movie && <h4>loading...</h4>}
      {movie?.map((e)=>(
        <div key={e.id}>
          <h2>{e.original_title}</h2>
        </div>
      ))}
    </div>

  )
}

