import React from "react";
//Import global style
import GlobalStyle from "./components/GlobalStyle";
//Import pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";

import Nav from "./components/Nav";

//Router
import { Switch, Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        {/* this :id works like a dynamic text */}
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
