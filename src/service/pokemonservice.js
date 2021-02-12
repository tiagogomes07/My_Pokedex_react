import axios from 'axios'

export default class Services{
    constructor(){

    }

    static GetAllListPokemon(limit, offset){
       return  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    }


    static GetPokemonDetails(idPokemon){
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    }
}