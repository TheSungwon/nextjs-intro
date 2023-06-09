const { redirect } = require('next/dist/server/api-utils')

const API_KEY = process.env.API_KEY;
//10923b261ba94d897ac6b81148314a3f
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  //add redirects
  async redirects(){
    return[
      {
        source : "/aa/:path*",
        destination : "/bb/:path*",
        permanent : false
      }
    ]
  },

  //add rewrites
  async rewrites(){
    return[
      {
        source : "/api/movies",
        destination : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      {
        source:"/api/movies/:id",
        destination:`https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
    ]
  }
}

module.exports = nextConfig
