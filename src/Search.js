import React, { Component } from 'react'

class Search extends Component {
  state = {
    query:'',
    people: []
  }

 onChange = (e) => {
   const{ value } = e.target;
   this.setState({
     query: value
   })
  this.componentDidMount(value)
 }

componentDidMount = (query) => {
  const url = `https://swapi.co/api/people?search=${query}`;
  const token = {};
  this.token = token;

  fetch(url)
   .then(results => results.json())
   .then(data => {
     if(this.token === token){
       this.setState({ people: data.results });
     }
   })
   .catch(error => console.log("error", error))
  }

clearQuery = (query) => {
  this.setState({ query:'', people:[] })
}

 render() {
   const{ people } = this.state
   return (
     <form>
       <input
         type="text"
         className="search-box"
         aria-label="Search"
         tabindex="1"
         placeholder="Search for..."
         onChange={this.onChange}
       />
       <button
          onClick={this.clearQuery}
          type="button"
          className = "button"
          tabindex="2"
          aria-label="Button"
          >
          Clear
        </button>
       {people.map(person => (
         <ul key={person.name}>
         <li>Name: {person.name}</li>
         <li>Birth Year: {person.birth_year}</li>
         <li>Gender: {person.gender}</li>
         <li>Height: {person.height}</li>
         <li>Mass: {person.mass}</li>
         </ul>
       ))}
     </form>
   )
 }
}

export default Search
