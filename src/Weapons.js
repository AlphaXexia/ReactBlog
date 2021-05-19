import {useState} from 'react';

const Blog = () => {
    const [blogs, setBlogs]= useState([
        {title: 'Aquila Favonia', body: 'lorem ipsum...', type: 'Sword', id:1},
        {title: 'Vortex Vanquisher', body: 'lorem ipsum...', type: 'PoleArm', id:2},
        {title: 'Elegy of the end', body: 'lorem ipsum...', type: 'sword', id:1},
    ]);

    return (
        <div className="blog">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Weapon Type: {blog.type}</p>
                </div>
            ))}
        </div>
    )
}

export default Weapons;