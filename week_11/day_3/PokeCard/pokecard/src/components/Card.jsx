import React, { Component } from 'react';
import "./Styles.css"

class Card extends Component {
        state = {
            flip: false
        }
    render() {
        const {hp,name} = this.props.pokemon
        const uppercased = name.toUpperCase()
        return (
            <div className="pokemon-card">
                <h3>{uppercased}</h3>
                <p> 🧡 HP: {hp}</p>              
            </div>
        );
    }
}

export default Card;