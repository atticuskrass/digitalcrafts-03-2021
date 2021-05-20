import React, { Component } from 'react'
import Card from "./Card.jsx";
// import "./Styles.css";

//--class based component
export default class CardDisplay extends Component {
//--initializing state or in other words, setting a series of observable properties that control the behavior of a component
    state = {
        searchCriteria: "",
        pokemonList: [],
        pokemonName: "",
        pokemonHP: "",
}
//--writing componentDidMount will allow me to take the original prop data and make it part of the component's state, 
//--props are read-only and so I need something that can be modified such as the properties of a component's state
componentDidMount() {
    this.setState({
      pokemonList: this.props.pokemonData[0].pokemon,
    });
  }
//--searchCriteria assigns "event.target.value" into the variable "search", it then modifies the state property "searchCriteria" 
//--by adding the variable "search" as it's value, the value it's targeting comes from the text entered in the field itself
searchCriteria = (event) => {
    const search = event.target.value;
    this.setState({
        searchCriteria:search
})
}
//--this function targets the values entered in the create inputs and sends
//--them to their corresponding state properties
sendPokemonToData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  };
//--clicking the Submit button take's the text entered and updates the corresponding state properties
//--giving the submission event a method of preventDefault() stops a render 
//--finally, the newPokemon is added to the pokemonList property creating the newPokemonList
onSubmit = (event, filteredData) => {
    event.preventDefault();
    const newPokemon = {
        pokemonName: this.state.pokemonName,
        pokemonHP: this.state.pokemonHP
}
    const newPokemonList = [newPokemon,...this.state.pokemonList]
    this.setState({pokemonList:newPokemonList})
};
    render() {
        //--I destructured the state property "pokemonList", I created a variable called filteredData and assigned it
        //--the pokemonList with the filter and includes methods that allows the data to be parsed according to the searchCriteria property
        //--which is attached to the search-field input
        const { pokemonList } = this.state
        const filteredData = pokemonList.filter((pokemon) =>
        pokemon.name.includes(this.state.searchCriteria)) 
        //--attached functions to the onChange method of each input
        return (
            <div className="card-container">
                <form onSubmit={(e) => this.onSubmit(e, filteredData)}>
                    <input type="text" onChange={(e) => this.searchCriteria(e)} placeholder="Search Database" className="search-field-input"></input>
                    <input type="text" onChange={(e) => this.sendPokemonToData(e)} value={this.state.pokemonName} name="pokemonName" placeholder="Create a Name"></input>
                    <input type="text" onChange={(e) => this.sendPokemonToData(e)} value={this.state.pokemonHP} name="pokemonHP" placeholder="Set Health Points"></input>
                    <input className="create-field" type="submit" value="Submit" />
                </form>
            <div>
                {filteredData.map((singlePokemon, index) => (
                <Card key={singlePokemon.name} pokemon={singlePokemon} />
            ))}
            </div>
        </div>   
        )
    }
}
