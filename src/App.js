import React from "react";
import "./Pages/public/css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Index from "./Pages/Index";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import MovieListEditor from "./Pages/MovieListEditor";
import ProtectedRoute from "./Auth/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <ProtectedRoute
            path="/movie-editor"
            exact
            component={MovieListEditor}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
