import React from "react";
import "./Pages/public/css/style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./Pages/Index";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Index} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </div>
    </Router>
  );
}

export default App;
