import React, { Component } from 'react'
import { fetchData } from '../api/index'
import { Link } from 'react-router-dom'
import Spinner from './Spinner';

export default class PokeDetail extends Component {
    state = {
        url: 'https://pokeapi.co/api/v2/pokemon/',
        image: '',
        data: null
    }
    async componentDidMount() {
        const id = this.props.match.params.id;
        const res = await fetchData(`${this.state.url}${id}`)
        this.setState({
            data: res
        })
    }
    render() {
        const { data } = this.state;
        if (data) {
            return (
                <div className="detail">
                    <Link to="/" className="link"><i className="fas fa-arrow-alt-circle-left" />{' '}Back to Main Page.</Link>
                    <div className="detail-card">
                        <div className="detail-top">
                            <h3>{data.id}</h3>
                        </div>
                        <div className="detail-main">
                            <div className="avatar">
                                {data.sprites.front_default ? (
                                    <img src={data.sprites.front_default} alt={data.name} />
                                ) : (
                                        <Spinner />
                                    )}

                            </div>
                            <div className="avatar-data">
                                <h2>{data.name}</h2>
                                <div className="avatar-detail">
                                    <h3>Species:</h3>
                                    <p>{data.species.name}</p>
                                </div>
                                <div className="avatar-detail">
                                    <h3>Height:</h3>
                                    <p>{data.height}ft</p>
                                </div>
                                <div className="avatar-detail">
                                    <h3>Weight:</h3>
                                    <p>{data.weight}lbs</p>
                                </div>
                                <div className="avatar-detail">
                                    <h3>Type:</h3>
                                    <div className="tag">
                                        {data.types.map((type, index) => (

                                            <p key={index}>{type.type.name}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="detail-profile">

                        </div>
                    </div>
                </div >
            )
        } else {
            return <Spinner />
        }
    }
}
