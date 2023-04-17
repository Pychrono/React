// import { useState, useEffect } from 'react';                                                                                                                                                                                                                                                                                                                                                                                                                     
import BlogList from './BlogList';
import useFetch from "./useFetch";


const Home = () => {
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
  
    return (
      <div className="home"> 
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { blogs && <BlogList blogs={blogs} title=" All Blogs below!" /> }
        <div className="blog">
          This is my blog!!!, God dammittttt
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum exercitationem rem odio quisquam officiis fuga veniam, distinctio quod! Sed saepe dolor facilis maxime aliquid ut illum, molestiae voluptates voluptatem veritatis.
        </div>
      </div>
    );
  }

export default Home;