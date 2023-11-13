import React from 'react';
import classes from './BlogPost.module.css';
import blogImage from '../../../../public/images/card-image2.webp';

const BlogPost = () => {
    return (
        <div className="row m-0 bg-transparent">
            <img src={blogImage} className={`p-0 rounded col-2 ${classes.blogImage}`} alt="blog-image"/>
            <div className="col-10">
                <ul className="list-group d-flex flex-row">
                    <li className={`list-group-item bg-transparent border-0 px-0 ${classes.listItems}`}>
                        <span className="fa fa-solid fa-calendar me-1"></span>Jan. 18, 2021
                    </li>
                    <li className={`list-group-item bg-transparent border-0 px-0 text-capitalize ms-2 ${classes.listItems}`}><span
                        className="fa fa-solid fa-user me-1"></span>Admin
                    </li>
                </ul>
                <h3 className={`text-capitalize ${classes.textBlog}`}>Creativity and Inspiration</h3>
            </div>
        </div>
    );
};

export default BlogPost;