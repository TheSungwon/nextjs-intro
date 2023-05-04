import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail(params){
    console.log(params.movieInfo);
    
    const router = useRouter();
    
    const [title, id] = router.query.params || params.params;
    console.log(router.query.params);
    return (
        <div>
        <Seo title={title}></Seo>
        <h1>{title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500/`+params.movieInfo.poster_path} alt=""/>
        <ul>
        {params.movieInfo.genres.map((e, i)=>(
            <li key={i}>
                {e.name}
            </li>
            ))}
        </ul>
        <hr/>
        <ul>
        {params.movieInfo.production_companies.map((e, i)=>(
            <li key={i}>
            <img src={`https://image.tmdb.org/t/p/w500/`+e.logo_path} alt=""/>
            </li>
            ))}
        </ul>
        
        </div>
    );
}

export async function getServerSideProps(props){
    
    const info = await (await fetch(`http://localhost:3000/api/movies/${props.params.params[1]}`)).json();
    console.log(info);
    return {
        props:{
            params:props.params.params,
            movieInfo:info

        },
    }
}