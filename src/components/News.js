import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import GoUp from './GoUp';

const News = (props) => {
  const [articles, setArticles] = useState([])
  // const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capatilize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category ? props.category : News.defaultProps.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70);

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capatilize(props.category ? props.category : "Home")} - NewsMine`;
    updateNews();
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category ? props.category : News.defaultProps.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1)

    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70);

    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    props.setProgress(100);
  };

  return (
    <>
      <h1 style={{ marginTop: "70px" }} className='text-center'>{capatilize(props.category ? props.category : "Home")} - Top HeadLines</h1>

      <hr />

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">

          <div className="row justify-content-around" align="center">
            {articles.map((element) => {
              return <div key={element.url} className="col-md-6 col-lg-4 col-xl-3">
                <NewsItem title={element.title ? element.title.slice(0, 50) : "Title is not available"} description={element.description ? element.description.slice(0, 100) : "Description is not available. Click on read more to read full article"} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt ? element.publishedAt.slice(0, 10) : "Date isn't available"} time={element.publishedAt ? element.publishedAt.slice(11, 19) : "Time isn't available"} sourceName={element.source.name ? element.source.name : "Unknown"} />

              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>

      <GoUp />
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 12,
  category: 'general',
  totalResults: 0
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
};

export default News