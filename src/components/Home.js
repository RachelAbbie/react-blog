import React, { useState } from 'react';

const Home = () => {
/*
    //let name = 'calli'
    const [name, setName] = useState('calli');
    const [age, setAge] = useState(22)
    const handleClick = (e) => {
        setName('calliope')
    }


    return ( 
    <div className="home">
        <h2>Home</h2>
        <p>{ name } is { age }</p>
        <button onClick={handleClick}>Click Me</button>
           </div>
     );
*/

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum....', author: 'calli', id: 1},
        { title: 'Welcome Party', body: 'lorem ipsum....', author: 'calla', id: 2},
        { title: 'Web dev topics', body: 'lorem ipsum....', author: 'Lippe', id: 3}
    ])
    return (
        <div className="home">
            {blogs.map((blog) => (
             <div className="blog-preview" key={blog.id}> 
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>

             </div>
            ))}
        </div>
    )
}
 
export default Home;