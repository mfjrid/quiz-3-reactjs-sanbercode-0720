import React, { Component } from "react";
import Footer from "../Elements/Footer";
import Auth from "../Auth/Auth";
import axios from "axios";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      hasilnya: 0,
    };
  }

  componentDidMount() {
    axios
      .get(`http://backendexample.sanbercloud.com/api/movies`)
      .then((hasil) => {
        const movie = hasil.data;
        this.setState({ movieList: movie });
        // if (movie.rating === (/\s/g, "")) {
        //   movie.rating = 0;
        // }
        this.urutanRating();
      });
  }

  urutanRating() {
    const { movieList } = this.state;
    let newmovieList = movieList;
    newmovieList = movieList.sort(
      (a, b) => parseInt(b.rating) - parseInt(a.rating)
    );
    this.setState({
      movieList: newmovieList,
      hasilnya: 1,
    });
  }

  render() {
    return (
      <div>
        <section>
          <button
            onClick={() => {
              Auth.login(() => {
                this.props.history.push("movie-editor");
              });
            }}
          >
            Login
          </button>
          <h1>Daftar Film Film Terbaik</h1>
          <div id="article-list">
            {this.state.hasilnya === 1 &&
              this.state.movieList.map((movie) => {
                return (
                  <div key={movie.id}>
                    <a href>
                      <h3>{movie.title}</h3>
                    </a>
                    <h4>
                      Rating : {movie.rating}
                      <br />
                      Durasi : {movie.duration}
                      <br />
                      Genre : {movie.genre}
                    </h4>
                    <p>
                      <b>Deskripsi :</b> {movie.description}
                    </p>
                    <hr />
                  </div>
                );
              })}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Index;
