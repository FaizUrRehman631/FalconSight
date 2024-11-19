import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner";
// import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
  const [articles, setArticles]=useState([]);
  const [loading, setLoading]=useState(true);
  const [page, setPage]=useState(1);
  const [totalResults, setTotalResults]=useState(0);
 
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
    document.title = `${capitalizeFirstLetter(
      props.category
    )} - FalconSight`;
  
  const updateNews = async()=> {
    props.setProgress(10);
    let myurl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(myurl);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
    props.setProgress(100);

  }
  useEffect(()=>{
    updateNews();
    // eslint-disable-next-line 
  },[])


  const fetchMoreData = async () => {
    let myurl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}}&page=${page}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(myurl);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults);
  };

    return (
      <>
        <h1 className="text-center" style={{marginTop:"60px"}}>
          Top News - {capitalizeFirstLetter(props.category)} Articles
          and Headlines
        </h1>
        {loading && <Spiner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spiner/>} 
        >
          <div className="container">
    
            <div className="row my-3 mx-3">
              {articles?.map((element) => {
                return (
                  <div className="col-md-4" key={element?.date}>
                    <NewsItem
                      title={ element?.title}
                      description={element?.description}
                      imageUrl={element?.urlToImage}
                      newsUrl={element?.url}
                      author={element?.author}
                      date={element?.publishedAt}
                      source={element?.source?.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
    // News.defaultProps = {
    //   country: "us",
    //   pageSize: 20,
    //   category: "general",
    // };
    // News.propTypes = {
    //   country: PropTypes.string,
    //   pageSize: PropTypes.number,
    //   category: PropTypes.string,
    // };

export default News;