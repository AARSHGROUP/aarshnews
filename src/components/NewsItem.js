// THIS IS MY OUTPUT FILE

// 39.1.3 also here remove the component for same earlier reason
// import React, { Component } from "react";
import React from "react";

// 39.1.3.1 and also here give the const variable using arrow function and inactive or remove the "render()" function.
// export class NewsItem extends Component {
const NewsItem = (props) => {
  // render() {
  let { title, description, imageUrl, NewsUrl, author, date, source } =
    // this.props; //39.1.3.2 and also here remove the this.props and only mention props, and above give the "props" inside of arrow funciton because now im using the "FBCNT" Thats it., and now go on "News.js" file with point 39.1.4
    props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-warning">{source}</span>
        </div>

        <img
          src={
            !imageUrl
              ? "https://images.hindustantimes.com/img/2023/01/10/1600x900/jee_main_2023_bombay_hc_1673335789379_1673335789721_1673335789721.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}...{" "}
            <span className="badge rounded-pill bg-success">New</span>
          </h5>
          <p className="card-text">{description}....</p>

          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toUTCString()}
            </small>
          </p>

          <a
            href={NewsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More..
          </a>
        </div>
      </div>
    </div>
  );
  // }
};

export default NewsItem;
