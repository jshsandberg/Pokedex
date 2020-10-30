import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm.js";
import ResultList from "./ResultsList";
import PokedexMapped150 from "./pokedexMapped150.json";
import Wrapper from "./Wrapper";
import SearchResult from "./SearchResult";



function SearchPokemon() {
    const [kantoPokemon, setKantoPokemon] = useState(PokedexMapped150);
    const [typeState, setTypeState] = useState({});
    const [inputState, setInputState] = useState();
    const [searchState, setSearchState] = useState();
    const [grabPokemon, setGrabPokemon] = useState([]);
    const [empty, setEmpty] = useState(false);
    


    useEffect(()=> {
        setKantoPokemon(kantoPokemon)
       
    },[inputState])

   const handleFormSubmit = e => {
        e.preventDefault();
  

        const check = () => {
            setKantoPokemon(PokedexMapped150)
            for (let i = 0; i < kantoPokemon.length; i++) {
                //console.log(kantoPokemon[i])
                if (kantoPokemon[i].name === inputState){
                    setKantoPokemon(kantoPokemon[i])
                    setEmpty(false)
                } else {
                    setEmpty(true)
                }
            }
        }

        check()
        //console.log(kantoPokemon)
        
    
    
        
    };

    const handleInputChange = event => {
        setInputState(event.target.value)
        //console.log('hello')
        
    };

  
   
 
    return <>

  
   
     
        {kantoPokemon.length > 1 ?  
            <>
                <Wrapper>
                    <div className="row">
                        <SearchForm 
                            handleFormSubmit={handleFormSubmit}
                            handleInputChange={handleInputChange}
                        >
                        </SearchForm>
                    </div>
                    <div className="row center">
                        {kantoPokemon.map(item => (
                            <ResultList item={item} 
                                key={Math.random(item.name.length)} 
                            >
                            </ResultList>
                        ))} 
                    </div>
                </Wrapper>
            </>
            :
            <Wrapper> 
                <SearchResult
                    kantoPokemon={kantoPokemon}></SearchResult>
                    
            </Wrapper>
        }

</>

}

export default SearchPokemon;
