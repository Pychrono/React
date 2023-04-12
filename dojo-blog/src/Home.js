// import { useState, useEffect } from 'react';                                                                                                                                                                                                                                                                                                                                                                                                                     
import BlogList from './BlogList';
import useFetch from "./useFetch";


const Home = () => {
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
  
    return (
      <div className="home"> 
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { blogs && <BlogList blogs={blogs} title=" All Blogs!" /> }
        <div className="blog">
          This is my blog!!!, what are u doing here imposter!!!, I'll call the cops
        </div>
      </div>
    );
  }

export default Home;