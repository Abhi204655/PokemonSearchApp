import React from 'react';
import './App.css';
import Pokemons from './components/Pokemons';
import AppNav from './components/AppNav';
import PokeDetail from './components/PokeDetail';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <AppNav />
        <Switch>
          <Route exact path="/" component={Pokemons} />
          <Route exact path="/:id" component={PokeDetail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
