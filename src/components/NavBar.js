import Link from "next/link";
import { useRouter } from "next/router";


export default function NavBar() {
    const router = useRouter();
    console.log(router);
    // return <nav className={styles.nav}> //module.css 사용방법
    // classNmae={{`styles.link styles.nav`}}
    return <nav>
        {/* <img src="/vercel.svg" /> */}
        <img src="/cat.jpg" />
        <div>
        <Link href={router.pathname === "/" ? "/about" : "/"}>
            <span className={router.pathname==="/about"? "active":""}>{router.pathname === "/" ? "about" : "Home"}</span>
        </Link>
        <hr />
        <Link href={router.pathname === "/about" ? "/about" : "/"}>
            <span className={router.pathname==="/"? "active":""}>{router.pathname === "/about" ? "about" : "home"}</span>
        </Link>
        </div>

        <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav span {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
}