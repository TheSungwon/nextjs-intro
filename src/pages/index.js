import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function a() {

  const API_KEY = "10923b261ba94d897ac6b81148314a3f";
  const [moive, setMoives] = useState([]);

  //`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

  useEffect(()=>{

    (async ()=>{
      const data = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();
      console.log(data);
      
    })();
    

  },[]);



  return (
    <div>
      <Seo title="home"></Seo>
      <h1>hello world</h1>
    </div>

  )
}

