const fs = require('fs');
const axios = require('axios');
const data = require('./pokedex.json');

const scrapeEverything = async () => {
    try {

        const {data:{results}} = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1050");
        console.log(results)
        const pokedex = [];
        let count = 0;
        const getPokemon = async () => {
            if(results[count]){
                const {data:{name, sprites:{front_default},stats, types}} = await axios.get(results[count].url);
                pokedex.push({name,img:front_default,stats,types});
                console.log(name);
                count ++;
                getPokemon()
            }else{
                fs.writeFile("pokedex.json", JSON.stringify(pokedex), err => console.log(err || "Success!"))
                return
            }
        }
       getPokemon()
       
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
        types: item.types.map(a=> ({name:a.type.name}))
    }
    return newItem
})
fs.writeFile("pokedexMapped.json", JSON.stringify(mappedData), err => console.log(err || "Success!"))