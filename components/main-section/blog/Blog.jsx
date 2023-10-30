import React from 'react';
import classes from './Blog.module.css';
import BlogCard from "../../../components/main-section/blog/blog-card/BlogCard.jsx";
import blogImage from '../../../public/images/blog-image1.webp';
const Blog = () => {
    return (
        <section className={classes.blogContainer}>
            <div className="container-sm">
                <div className="row m-0">
                    <div className="col-12 text-center mb-5">
                        <span className={`text-uppercase ${classes.headText}`}>our blog</span>
                        <h6 className={`text-capitalize ${classes.descriptionText}`}>Recent From Blog</h6>
                    </div>
                    <div className="col-12">
                        <div className="row m-0 g-3">
                            <div className="col-lg-4 col-md-6 col-12">
                                <BlogCard image={blogImage}/>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <BlogCard image={blogImage}/>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <BlogCard image={blogImage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;