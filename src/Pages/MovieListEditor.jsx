import React from "react";
import Auth from "../Auth/Auth";

const MovieListEditor = (props) => {
  return (
    <div>
      <section>
        <button
          onClick={() => {
            Auth.logout(() => {
              props.history.push("/");
            });
          }}
        >
          Logout
        </button>
        <h1>Ini Movie List Editor</h1>
        <h3>Hanya bisa dilihat setelah klik login</h3>
      </section>
    </div>
  );
};

export default MovieListEditor;
