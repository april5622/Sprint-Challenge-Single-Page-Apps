import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";
import WelcomePage from "./components/WelcomePage.js";


export default function App() {
  return (
    <main>
      <Header />
      <SearchForm />
      <div className="nav-links">
      <Link className="home-nav" exact to="/">Home</Link>
      <Link className="character-nav" to="/character-list">Characters</Link>
      </div>
      <Route exact path ="/" component={WelcomePage}/>
      <Route path='/character-list/' component={CharacterList} />
    </main>
  );
}


