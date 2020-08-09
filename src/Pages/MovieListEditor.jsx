import React from "react";
import Auth from "../Auth/Auth";

const MovieListEditor = (props) => {
  return (
    <div>
      <h1>Ini Movie List Editor</h1>
      <h3>Hanya bisa dilihat setelah klik login</h3>
      <button
        onClick={() => {
          Auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default MovieListEditor;
