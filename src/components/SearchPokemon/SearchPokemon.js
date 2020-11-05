import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm.js";
import ResultList from "../ResultsList";
import PokedexMapped150 from "../pokedexMapped150.json";
import Wrapper from "../Wrapper";
import SearchResult from "../SearchResult";
import ReturnAll from "../ReturnAll/ReturnAll.js";
import SingleResult from "../SingleResult/index.js";
import API from "../../utils/API"
import Meter from "../Meter/index.js"



function SearchPokemon() {
    const [kantoPokemon, setKantoPokemon] = useState(PokedexMapped150);
    const [apiState, setApiState] = useState([]);
    const [inputState, setInputState] = useState();
    const [searchState, setSearchState] = useState();
    const [grabPokemon, setGrabPokemon] = useState([]);
    const [empty, setEmpty] = useState(false);

    const resultCSS = {
        textAlign: "center",
        textTransform: "capitalize",
        fontWeight: "bold",
    }
    


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
      
        
    
    
        
    };

    const handleInputChange = event => {
        setInputState(event.target.value)
        //console.log('hello')
        
    };

   

    const returnAll = () => {
        setKantoPokemon(PokedexMapped150)
    }
  
   
 
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
                    <div style={{justifyContent: "center"}} className="row center">
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
                <div className="row">
                    <div className="col">
                        <ReturnAll
                            returnAll={returnAll}
                        >
                        </ReturnAll>
                    </div>
                    <div className="col">
                        <SingleResult
                            kantoPokemon={kantoPokemon}
                        >
                        </SingleResult>
                    </div>
                </div>
              
              
           
            
                    
            </Wrapper>
        }



</>

}

export default SearchPokemon;
