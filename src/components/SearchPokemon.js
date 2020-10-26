import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm.js"
import API from "../utils/API";
import ResultList from "./ResultList";

function SearchPokemon() {
    const [inputState, setInputState] = useState("");
    // const [searchState, setSearchState] = useState("");
    const [imageState, setImageState] = useState("");
    const [nameState, setNameState] = useState("");
    const [HPState, setHPState] = useState("");
    const [ATKState, setATKState] = useState("");
    const [DEFState, setDEFState] = useState("");
    const [SPAState, setSPAState] = useState("");
    const [SPDState, setSPDState] = useState("");
    const [SPEState, setSPEState] = useState("");

    useEffect(()=> console.log("component mounted!"),[])
    
    const statArray = [HPState, ATKState, DEFState, SPAState, SPDState, SPEState];
    //stats gives me an array, how can i use the array rather than 7 differenct states
    //const [statsState, setStatsState] = useState([]);

    // const pokemonData = [
    //     {
    //         name: nameState,
    //         image: imageState,
    //         stats: {
    //                 HP: HPState,
    //                 ATK: ATKState,
    //                 DEF: DEFState,
    //                 SPA: SPAState,
    //                 SPD: SPDState,
    //                 SPE: SPEState
    //                 }
    //     }
    // ]


// variable to holds onto all of the pokemon
    const pokemonResults = [];

    
  
// //when should i use compoonentdidmount and useeffect for render on first time
//     useEffect(() => {
//         if (!searchState) {
// //Need to make a promise so I can wait for the function to gather the data and then I can set the Search State to it but dont know how

//             //getAllPokemon()
            
            
           
//             return 
//         }

const handleSearch = () => {
    console.log(inputState)
    
    API.search(inputState)
    .then(res => {
                if (res.data.length === 0) {
                    throw new Error("No results found.");
                  }
                  if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                setImageState(res.data.sprites.front_default)
                setNameState(res.data.name)
                setHPState(res.data.stats[0].base_stat)
                setATKState(res.data.stats[1].base_stat)
                setDEFState(res.data.stats[2].base_stat)
                setSPAState(res.data.stats[3].base_stat)
                setSPDState(res.data.stats[4].base_stat)
                setSPEState(res.data.stats[5].base_stat)
                //console.log(res.data)
                //setStatsState(res.data.stats)
             
                
                //setStatsState(...statsState, res.data.stats  )
                //console.log(statsState)
                //console.log(res.data.stats)
                //console.log(nameState)
                //console.log(res.data.name)
                // console.log(imageState)
            })
            .catch(err => console.log(err))
}
    // const removeStats = event => {
        //     event.preventDefault();
    //     const newArray = [].concat(statsState);
    //     newArray.splice(statsState);
    //     setStatsState({statsState: newArray})
    //     console.log(statsState)
        
    // }
//why do I need a handleFormSubmit?
   const handleFormSubmit = e => {
       //console.log(e.target.value)
        e.preventDefault();

//UNCOMMENT THIS OUT IF YOU WANT TO UYSE THE SEARCH FOR ONE POKEMON
        // setSearchState(inputState)
        handleSearch()
        // pokemonResults.forEach(pokemon => {
        //     setSearchState(pokemon)
        // })

        //setSearchState(pokemonResults[9])
        
        //console.log(pokemonResults[0])
        //console.log(statArray)
        // console.log(imageState)
        // console.log(nameState)
        // console.log(HPState)
        // console.log(ATKState)
        // console.log(DEFState)
        // console.log(SPAState)
        // console.log(SPDState)
        // console.log(SPEState)
    
        //console.log(statsState)
        //mapStats();
        //console.log(searchState)
        //console.log(searchState)
        
    };

    // const mapStats = () => {
    //     statsState.map(item => {
    //         console.log(item.stat.name, item.base_stat)
    //     })
    // }

    const handleInputChange = event => {
        setInputState(event.target.value)
        //console.log(searchState)
    };

    
    // const componentDidMount = () => {
    //     setSearchState("ditto");
    // };

    const getAllPokemon = () => {
        API.getAll().then(res => {
            const { results } = res.data;
            results.forEach(function (value) {
                pokemonResults.push(value.name)
            })
        })

        //console.log(pokemonResults[0])
        //setSearchState(pokemonResults[0])
        //console.log(searchState)
        //console.log(pokemonResults)
        // if (pokemonResults != null) {
        //     setSearchState(pokemonResults[0])
        //     console.log(searchState)
        // } else {
        //     console.log("it is null")
        // }
    }

   
 
    return <>

    <SearchForm 
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
     />

    <ResultList 
        image={imageState} 
        name={nameState} 
        stats={statArray}

    />
</>

}

export default SearchPokemon;
