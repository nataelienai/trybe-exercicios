import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import About from './About';
import NotFound from './NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> Pokedex </h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route 
            exact path="/"
            render={ () => <Pokedex pokemons={pokemons} /> }
          />
          <Route
            path="/about"
            component={ About }
          />
          <Route 
            path="/pokemons/:id"
            render={ (props) => <PokemonDetails { ...props } pokemons={ pokemons } /> } 
          />
          <Route path="*" component={ NotFound } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
