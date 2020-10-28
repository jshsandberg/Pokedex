const fs = require('fs');
const axios = require('axios');
const data = require('./pokedex.json');
const data150 = require('./pokedex150.json')

// const scrapeEverything = async () => {
//     try {

//         const {data:{results}} = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1050");
//         console.log(results)
//         const pokedex = [];
//         let count = 0;
//         const getPokemon = async () => {
//             if(results[count]){
//                 const {data:{name, sprites:{front_default},stats, types}} = await axios.get(results[count].url);
//                 pokedex.push({name,img:front_default,stats,types});
//                 console.log(name);
//                 count ++;
//                 getPokemon()
//             }else{
//                 fs.writeFile("pokedex.json", JSON.stringify(pokedex), err => console.log(err || "Success!"))
//                 return
//             }
//         }
//        getPokemon()
       
//     }catch(err){
//         console.log(err)
//     }
// } 

const scrapeEverythingGen1 = async () => {
    try {

        const {data:{results}} = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151");
        console.log(results)
        const pokedex150 = [];
        let count = 0;
        const getPokemon150 = async () => {
            if(results[count]){
                const {data:{name, sprites:{front_default},stats, types}} = await axios.get(results[count].url);
                pokedex150.push({name,img:front_default,stats,types});
                console.log(name);
                count ++;
                getPokemon150()
            }else{
                fs.writeFile("pokedex150.json", JSON.stringify(pokedex150), err => console.log(err || "Success!"))
                return
            }
        }
       getPokemon150()
       
    }catch(err){
        console.log(err)
    }
} 

const mappedData = data.map(item => {
    const newItem = {
        ...item,
        stats: {
            hp: item.stats[0] ? item.stats[0].base_stat :"",
            atk: item.stats[1] ? item.stats[1].base_stat : "",
            def: item.stats[2] ? item.stats[2].base_stat : "",
            spa: item.stats[3] ? item.stats[3].base_stat : "",
            spd: item.stats[4] ? item.stats[4].base_stat : "",
            spe: item.stats[5] ? item.stats[5].base_stat : "",
        },
        types: item.types.map(a=> ({name:a.type.name})),
        
    }
    return newItem
})

const mappedData150 = data150.map(item => {
    const newItem150 = {
        ...item,
        stats: {
            hp: item.stats[0] ? item.stats[0].base_stat :"",
            atk: item.stats[1] ? item.stats[1].base_stat : "",
            def: item.stats[2] ? item.stats[2].base_stat : "",
            spa: item.stats[3] ? item.stats[3].base_stat : "",
            spd: item.stats[4] ? item.stats[4].base_stat : "",
            spe: item.stats[5] ? item.stats[5].base_stat : "",
        },
        types: item.types.map(a=> ({name:a.type.name})),
    }
    return newItem150
})
fs.writeFile("pokedexMapped150.json", JSON.stringify(mappedData150), err => console.log(err || "Success!"))

