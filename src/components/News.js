import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News = (props) => {
  // "function based component are used with "useState" with import above and const" neither "cbcnt".
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);
    let data = await fetch(url);

    props.setProgress(30);
    let parseData = await data.json();

    props.setProgress(70);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    // 40.1.6 and now here i give the "set default title" inside of "useEffect function" so that when i click on any "menu tag" than "title name" changed according to" clicking menu tag name".
    document.title = `${capitalizeFirstLetter(props.category)} - WorldNews`;
    updateNews();
    // 40.1.4 which is below mention comment are mandatory for remove the error for empty place. and now go on "App.js" for make from "cbcnt" to "fbcnt" 40.1.5
    // eslint-disable-next-line
  }, []);

  // 40.1.3 here getting some bugs error in console during scrolldown than solved it by the "page=page+1" and after than i'll shift the "setPage(page+1) after url" but not give "page+1" inside of "updateNews"
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${
      process.env.REACT_APP_NEWS_API
    }&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);

    let data = await fetch(url);
    let parseData = await data.json();

    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };

  return (
    <>
      {/* 40.1.2 here give the top maring for some spaces from the sticky navbar*/}
      <h2 className="text-center" style={{ margin: "90px 0px 0px 0px" }}>
        WorldNews - Top {capitalizeFirstLetter(props.category)} Headlines
      </h2>

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={true}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    NewsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      <div className="container d-flex justify-content-between "></div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};
export default News;
