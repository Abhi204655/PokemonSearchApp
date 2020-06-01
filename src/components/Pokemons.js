import React, { Component } from 'react'
import { fetchData } from '../api';
import PokeCard from './PokeCard';
import Spinner from './Spinner';

class Pokemons extends Component {

    state = {
        url: 'https://pokeapi.co/api/v2/pokemon',
        next: null,
        prev: null,
        pokemons: []
    }
    async componentDidMount() {
        const res = await fetchData(this.state.url);
        this.setState({
            prev: res.previous,
            next: res.next,
            pokemons: res.results
        })
    }
    prevUrl = async () => {
        const res = await fetchData(this.state.prev);
        this.setState({
            prev: res.previous,
            next: res.next,
            pokemons: res.results
        })
    }
    nextUrl = async () => {
        const res = await fetchData(this.state.next);
        this.setState({
            prev: res.previous,
            next: res.next,
            pokemons: res.results
        })
    }
    render() {
        const { pokemons, prev, next } = this.state;
        if (pokemons) {
            return (
                <div className="wrepper">
                    <div className="elements">
                        {pokemons.map((pokemon, index) =>
                            <PokeCard pokemon={pokemon} key={index} />
                        )}
                    </div>
                    <div className="move">
                        {prev ? (
                            <button onClick={this.prevUrl}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                        ) : null}
                        {next ? (
                            <button onClick={this.nextUrl}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                        ) : null}
                    </div>
                </div>

            )
        } else {
            return <Spinner />
        }
    }
}


export default Pokemons;