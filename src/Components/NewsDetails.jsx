import React, { Component } from 'react'

export class NewsDetails extends Component {
  render() {
    let { title, description, urlToImage, url} = this.props;
    return (
      <div className='my-2'>
        <div className="card">
          <img src={urlToImage} className="card-img-top" alt="no image" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsDetails