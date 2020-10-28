import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm.js"
import ResultList from "./ResultList";
import PokedexMapped150 from "./pokedexMapped150.json"
import Wrapper from "./Wrapper"

function SearchPokemon() {
    const [kantoPokemon, setKantoPokemon] = useState([]);
    const [typeState, setTypeState] = useState([]);
    const [inputState, setInputState] = useState("");
    const [searchState, setSearchState] = useState("");
  

    
    

    useEffect(()=> {
        setKantoPokemon(PokedexMapped150);
        checkTypes();
    },[kantoPokemon])
   

    
  



   const handleFormSubmit = e => {
        e.preventDefault();
        const { types } = kantoPokemon
        //console.log(kantoPokemon)
        //console.log(types)
        console.log(typeState)
        
        
        
      
     

        
    };

    const handleInputChange = event => {
        setInputState(event.target.value)
        
    };

    const checkTypes = () => {
        kantoPokemon.map(type => {
        const typeOne = type.types[0]
        const typeTwo = type.types[1]
        const typesArr = []
        //console.log(type.types)
        if (typeTwo === undefined ) {
            typesArr.push(typeOne.name)
        } else {
            typesArr.push(`${typeOne.name} ${typeTwo.name}`)
        }
        console.log(typesArr[0])
        setTypeState(typesArr[0], typesArr[0])
      })
      
    }
    
   
 
    return <>

    <SearchForm 
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
     />
    
    <Wrapper>
    {kantoPokemon.map(item => (
        <ResultList item={item} key={Math.random(item.name.length)}></ResultList>
    ))}
   
      
      </Wrapper>

</>

}

export default SearchPokemon;
