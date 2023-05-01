import React, { Component, state } from 'react'
import NewsDetails from './NewsDetails'



export class News extends Component {
	constructor() {
		super();
		this.state = {
			articles: [],
			page: 1,
			totalResults: 0,
			loading: false,
		};
	}


	async update() {
		this.setState({ loading: true });
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
		{
			console.log(" PAGE", this.state.page)
			console.log("TOTAL PAGE",Math.ceil(this.state.totalResults / this.props.pageSize));
			console.log("page size",this.props.pageSize)
}
	}
	// country() {
	// 	this.setState({ country: this.state.country });
	// 	this.update();
	// }

	// category() {
	// 	this.setState({ category: this.state.category });
	// 	this.update();
	// }

	loading = () => {
		return (
			<div className="spinner-border text-primary" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		)
	}

	async componentDidMount() {
		this.setState({ loading: true });
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
	}


	handleprevious = () => {
		this.setState({ page: this.state.page - 1 });
		this.update();

	}


	handlenext = () => {
		if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
			this.setState({ page: this.state.page + 1 });
			this.update();
		}
	}
	render() {
		return (
			<div className='container my-3'>
				<h2>Top Headlines {this.state.totalResults} </h2>
				{this.state.loading && this.loading()}
				<div className="row">
					{this.state.articles.map((element) => {
						// console.log(this)
						return (
							<div className="col-md-4" key={element.url}>
								<NewsDetails title={element.title} url={element.url} urlToImage={element.urlToImage} description={element.description} />
							</div>
						)
					})}


				</div>
				<div className='container fixed-bottom mb-3'>
					<div className="d-flex justify-content-between">
						<button disabled={this.state.page <= 1} type="button" className="btn btn-dark me-2" onClick={this.handleprevious} > &larr; Previous</button>
						<button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handlenext}>Next &rarr; </button>
					</div>
				</div>
			</div>
		)
	}
}

export default News
