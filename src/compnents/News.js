import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 10,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0341080f799a4e5b9438cb005d2e049c&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({loading: true})

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
  }

  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0341080f799a4e5b9438cb005d2e049c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }

  handleNextClick = async () => {
    // Go on top
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 700);

    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0341080f799a4e5b9438cb005d2e049c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

      this.setState({ loading: true })

      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
    else {
      this.setState({
        disabledNext: false
      })
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className='text-center'>NewsMine - Top HeadLines</h1>

        <hr />

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} onClick={this.handlePreviousClick} className="btn btn-dark">&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
        </div>

        <hr />

        {this.state.loading && <Spinner />}

        <div className="row  justify-content-around" align="center">
          {this.state.articles.map((element) => {
            return <div key={element.url} className="col-md-6 col-lg-4 col-xl-3">
              <NewsItem title={element.title ? element.title.slice(0, 50) : "Title is not available"} description={element.description ? element.description.slice(0, 100) : "Description is not available. Click on read more to read full article"} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt ? element.publishedAt.slice(0, 10) : "Published Date of news is not available"} time={element.publishedAt ? element.publishedAt.slice(11, 19) : "Published Time of news is not available"} sourceName={element.source.name ? element.source.name : "Source name is not available"} />
            </div>
          })}
        </div>

        <hr />

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} onClick={this.handlePreviousClick} className="btn btn-dark">&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
