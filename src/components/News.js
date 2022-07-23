import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import GoUp from './GoUp';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 12,
    category: 'General',
    totalResults: 0
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  };

  capatilize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `${this.capatilize(this.props.category)} - NewsMine`;
  }

  updateNews = async (page) => {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + page}&pageSize=${this.props.pageSize}`;
    
    this.props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews(0);
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews(1)
  };
  
  
  render() {
    return (
      <>        
        <h1 className='text-center my-3'>{this.capatilize(this.props.category)} - Top HeadLines</h1>

        <hr />

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">

            <div className="row justify-content-around" align="center">
              {this.state.articles.map((element) => {
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
}

export default News
