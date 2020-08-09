import React from "react";
import HomeBody from "../Components/HomeBody";
import Footer from "../Elements/Footer";
import Auth from "../Auth/Auth";

export default function Index(props) {
  return (
    <div>
      <HomeBody />
      <button
        onClick={() => {
          Auth.login(() => {
            props.history.push("movie-editor");
          });
        }}
      >
        Login
      </button>
      <Footer />
    </div>
  );
}
