import NavBar from "@/components/NavBar"

export default function All({Component, pageProps}){
console.log(Component)
console.log(pageProps)
    return <>
        <Component {...pageProps}/>
        <NavBar />
        <style jsx global>
            {`
                .active{
                    color:red;
                }
            `}
        </style>
        <span>_app.js test</span>
    </>
}