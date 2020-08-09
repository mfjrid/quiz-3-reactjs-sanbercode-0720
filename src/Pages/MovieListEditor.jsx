import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieListEditor = () => {
  const [daftarMovie, setDaftarMovie] = useState(null);
  const [input, setInput] = useState({
    title: "",
    description: "",
    year: "",
    duration: "",
    genre: "",
    rating: "",
  });
  const [selectedId, setSelectedId] = useState(0);
  const [statusForm, setStatusForm] = useState("create");

  useEffect(() => {
    if (daftarMovie === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/movies`)
        .then((res) => {
          setDaftarMovie(
            res.data.map((el) => {
              return {
                id: el.id,
                title: el.title,
                description: el.description,
                year: el.year,
                duration: el.duration,
                genre: el.genre,
                rating: el.rating,
              };
            })
          );
        });
    }
  }, [daftarMovie]);

  const handleDelete = (event) => {
    let idDataMovie = parseInt(event.target.value);
    let newDaftarMovie = daftarMovie.filter((el) => el.id !== idDataMovie);
    axios
      .delete(`http://backendexample.sanbercloud.com/api/movies/${idDataMovie}`)
      .then((res) => {
        console.log(res);
      });
    setDaftarMovie([...newDaftarMovie]);
  };

  const handleEdit = (event) => {
    let idDataMovie = parseInt(event.target.value);
    let movie = daftarMovie.find((x) => x.id === idDataMovie);
    setInput({
      title: movie.title,
      description: movie.description,
      year: movie.year,
      duration: movie.duration,
      genre: movie.genre,
      rating: movie.rating,
    });
    setSelectedId(idDataMovie);
    setStatusForm("edit");
  };

  const handleChange = (event) => {
    let typeOfInput = event.target.name;

    switch (typeOfInput) {
      case "title": {
        setInput({ ...input, title: event.target.value });
        break;
      }
      case "description": {
        setInput({ ...input, description: event.target.value });
        break;
      }
      case "year": {
        setInput({ ...input, year: event.target.value });
        break;
      }
      case "duration": {
        setInput({ ...input, duration: event.target.value });
        break;
      }
      case "genre": {
        setInput({ ...input, genre: event.target.value });
        break;
      }
      case "rating": {
        setInput({ ...input, rating: event.target.value });
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let title = input.title;
    let description = input.description;
    let year = input.year.toString();
    let duration = input.duration.toString();
    let genre = input.genre;
    let rating = input.rating.toString();

    if (
      title.replace(/\s/g, "") !== "" &&
      description.replace(/\s/g, "") !== "" &&
      year.replace(/\s/g, "") !== "" &&
      duration.replace(/\s/g, "") !== "" &&
      genre.replace(/\s/g, "") !== "" &&
      rating.replace(/\s/g, "") !== ""
    ) {
      if (statusForm === "create") {
        axios
          .post(`http://backendexample.sanbercloud.com/api/movies/`, {
            title: input.title,
            description: input.description,
            year: input.year,
            duration: input.duration,
            genre: input.genre,
            rating: input.rating,
          })
          .then((res) => {
            setDaftarMovie([
              ...daftarMovie,
              {
                id: res.data.id,
                title: input.title,
                description: input.description,
                year: input.year,
                duration: input.duration,
                genre: input.genre,
                rating: input.rating,
              },
            ]);
          });
      } else if (statusForm === "edit") {
        axios
          .put(
            `http://backendexample.sanbercloud.com/api/movies/${selectedId}`,
            {
              title: input.title,
              description: input.description,
              year: input.year,
              duration: input.duration,
              genre: input.genre,
              rating: input.rating,
            }
          )
          .then((res) => {
            let dataMovie = daftarMovie.find((el) => el.id === selectedId);
            dataMovie.title = input.title;
            dataMovie.description = input.description;
            dataMovie.year = input.year;
            dataMovie.duration = input.duration;
            dataMovie.genre = input.genre;
            dataMovie.rating = input.rating;
          });
      }

      setStatusForm("create");
      setSelectedId(0);
      setInput({
        title: "",
        description: "",
        year: 0,
        duration: 0,
        genre: "",
        rating: 0,
      });
    }
  };

  return (
    <div>
      <section>
        <h1>Movie List Editor</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Description</th>
              <th>Year</th>
              <th>Duration</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {daftarMovie !== null &&
              daftarMovie.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.year}</td>
                    <td>{item.duration}</td>
                    <td>{item.genre}</td>
                    <td>{item.rating}</td>
                    <td>
                      <button onClick={handleEdit} value={item.id}>
                        Edit
                      </button>
                      <button onClick={handleDelete} value={item.id}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <br />
        <br />
        <h1>Form Edit dan Tambah Film</h1>

        <div style={{ width: "50%", margin: "0, auto", display: "block" }}>
          <div style={{ border: "1px solid #aaa", padding: "20px" }}>
            <form onSubmit={handleSubmit}>
              <label style={{ float: "left" }}>Title :</label>
              <input
                style={{ float: "right" }}
                type="text"
                name="title"
                value={input.title}
                onChange={handleChange}
              />
              <br />
              <br />
              <label style={{ float: "left" }}>Description :</label>
              <input
                style={{ float: "right" }}
                type="text"
                name="description"
                value={input.description}
                onChange={handleChange}
              />
              <br />
              <br />
              <label style={{ float: "left" }}>Year :</label>
              <input
                style={{ float: "right" }}
                type="text"
                name="year"
                value={input.year}
                onChange={handleChange}
              />
              <br />
              <br />
              <label style={{ float: "left" }}>Duration :</label>
              <input
                style={{ float: "right" }}
                type="text"
                name="duration"
                value={input.duration}
                onChange={handleChange}
              />
              <br />
              <br />
              <label style={{ float: "left" }}>Genre :</label>
              <input
                style={{ float: "right" }}
                type="text"
                name="genre"
                value={input.genre}
                onChange={handleChange}
              />
              <br />
              <br />
              <label style={{ float: "left" }}>Rating :</label>
              <input
                style={{ float: "right" }}
                type="text"
                name="rating"
                value={input.rating}
                onChange={handleChange}
              />
              <br />
              <br />
              <div style={{ width: "100%", paddingBottom: "20px" }}>
                <button style={{ float: "right" }}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieListEditor;
