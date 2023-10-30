import React from 'react';
import CardBody from "../../../../components/main-section/blog/blog-card/card-body/CardBody.jsx";

const BlogCard = ({image}) => {
    return (
        <div className="card border-0 bg-white">
            <img src={image} className="img-fluid" alt="blog"/>
            <div className="card-body">
                <CardBody
                    writer="admin" date="Jan. 20, 2021"
                    comments="comments"
                    title="How To Keep Your Teeth Always In The Best Condition"
                    description="A Small River Named Duden Flows By Their Place And Supplies It With The Necessary Regelialia"
                />
            </div>
        </div>
    );
};

export default BlogCard;