import axios from "axios";

const BASEURL = "https://pokeapi.co/api/v2/pokemon/"

const ALLURL = "https://pokeapi.co/api/v2/pokemon/?limit=150"

export default {
    search: function(query) {
        //console.log(BASEURL + query)

        return axios.get(BASEURL + query);
    },

    getAll: function() {
        //console.log(BASEURL + query)

        return axios.get(ALLURL);
    }
}