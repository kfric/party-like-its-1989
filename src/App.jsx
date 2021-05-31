import React, { Component } from 'react'

export class App extends Component {
  state = {
    results: [],
  }

  fetchData = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=a60f64fb9c4352717967f407d7a62bad'
    )
    const data = await response.json()
    this.setState({ results: data.results })
    console.log(data)
    console.log(this.state.results)
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const movieResults = this.state.results.map(results => {
      return (
        <article key={results.id}>
          <div className="poster">
            <img
              src={`https://image.tmdb.org/t/p/w185/${results.poster_path}`}
              alt="Poster image of the movie"
            ></img>
          </div>
          <ul>
            <li>{results.title}</li>
            <li>Release date: {results.release_date}</li>
            <li>{results.overview}</li>
          </ul>
        </article>
      )
    })
    return (
      <main>
        <header>
          <nav className="pageTitle">
            <h1>Party like it's 1989!</h1>
          </nav>
          <nav className="subTitle">
            <h3>Popular movies from 1989</h3>
          </nav>
          <nav className="navBar">
            <a href="#">Genre</a>
            <a href="#">Rating</a>
            <a href="#">Adult</a>
          </nav>
        </header>
        <section>{movieResults}</section>
      </main>
    )
  }
}
