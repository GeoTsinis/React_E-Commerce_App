import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">3/13/2023</p>
          <h5 className="title">A beautiful Sunday morning renaissance</h5>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            maxime recusandae aliquid ipsa provident laborum molestias. Tenetur
            porro quidem qui aperiam, veniam soluta expedita vero similique ab,
            fugit quae exercitationem?
          </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
