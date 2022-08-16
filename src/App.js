import './App.css';
import Navbar from "./navbar"
import './navbar.css';
import Home from "./home";
import './movies.css';
import Footer from "./footer";
import About from "./about.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import StarBuckss from "./starBucks";
import MovieForm_Nav from './movieForm_Nav.js'
import PageNotFound from './404.js';
import PopluarMovies from './popluarMovies.js'

function App() {
 return (
   <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path = "/movieForm_Nav">
              <MovieForm_Nav />
            </Route>
            <Route exact path="/popluarMovies">
              <PopluarMovies />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        <Footer/>
        {/* <StarBuckss/>
        <Footer/> */}
    </div>
   </Router>
  );
}

export default App;