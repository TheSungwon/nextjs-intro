import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";


export default function NavBar() {
    const router = useRouter();
    console.log(router);
    // return <nav className={styles.nav}> //module.css 사용방법
    // classNmae={{`styles.link styles.nav`}}
    return <nav>
        <Link href={router.pathname === "/" ? "/about" : "/"}>
            <span className={router.pathname==="/about"? "active":""}>{router.pathname === "/" ? "about" : "Home"}</span>
        </Link>
        <hr />
        <Link href={router.pathname === "/about" ? "/about" : "/"}>
            <span className={router.pathname==="/"? "active":""}>{router.pathname === "/about" ? "about" : "home"}</span>
        </Link>

        {/* <style jsx>{`
            nav{
                background-color:black;
            }
            span{
                text-decoration : none;
                color:red;
                
            }

            .active{
                color:yellow;
            }
        `}
        </style> */}
    </nav>
}