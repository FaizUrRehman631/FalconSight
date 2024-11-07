import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl,author, date, source} = this.props
    return (
      <div className="container my-3">
        <div className="card">
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">{source}</span>
          <img src={!imageUrl ? "https://i.insider.com/671a9caba0a0cc14f223b618?width=1200&format=jpeg": imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-body-secondary">By {author? author: "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a  href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
              Visit page
            </a> 
          </div>
        </div>
      </div>
      
    );
  }
}

export default NewsItem;
