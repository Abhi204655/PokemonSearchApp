import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

class PokeCard extends React.Component {

    state = {
        name: '',
        num: '',
        image: null
    }
    static getDerivedStateFromProps(props, state) {
        if (props.pokemon) {
            const num = props.pokemon.url.split('/')[6]
            return {
                name: props.pokemon.name,
                num,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`
            }
        } else return null;
    }
    render() {
        const { num, image, name } = this.state;
        return (
            <div className="card">
                <div className="card-header">
                    <h3>{name}</h3>
                </div>
                <div className="card-body">
                    {image ? (
                        <img src={image} alt={`${name}`} />
                    ) : (
                            <Spinner />
                        )}
                </div>
                <div className="read">
                    <Link to={`/${num}`} className="read-link">Read more</Link>
                </div>
            </div>
        )
    }
}

export default PokeCard;