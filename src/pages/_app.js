import Layout from "../components/Layout";

export default function All({Component, pageProps}){
    return (
    <Layout>
        <Component {...pageProps}/>
    </Layout>
    );
}