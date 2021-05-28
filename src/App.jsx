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
    return (
      <main>
        <header>
          <h1>Party like it's 1989!</h1>
        </header>
        <div>
          <ul>
            {this.state.results.map((results, id) => {
              return (
                <li key={results.id}>
                  {results.original_title}:
                  <p>
                    <img src="https://image.tmdb" />
                  </p>
                  <p>{results.overview}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </main>
    )
  }
}
