import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, date, time, sourceName } = props;
    return (
        <div className="card my-3">
            <img src={imageUrl ? imageUrl : "https://www.navarrenewspaper.com/wp-content/uploads/2020/09/breaking-news-blog-1138x658-1.jpg"} className="card-img-top" alt="news" />
            <div className="card-body" align="left">
                <span className='d-flex justify-content-between'>
                    <span>{date + " " + time}</span>
                    <span style={{ fontSize: "12px", fontStyle: "italic" }}>-{sourceName}</span>
                </span>
                <hr />
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark rounded-0 w-100 btn-sm">Read more</a>
            </div>
        </div>
    )
}

export default NewsItem
