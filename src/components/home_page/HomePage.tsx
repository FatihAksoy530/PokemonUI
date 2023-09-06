import { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";

import PokemonSearchBar from "../pokemon_search_bar/PokemonSearchBar";

import "./HomePage.css";

export default function HomePage() { 
    const [pokemons, setPokemons] = useState<any[]>([]);

    const fetchPokemon = async (event) => {
        event.preventDefault();
        const response = await axiosInstance.get(`/cards?pageSize=10`);
        const data = response.data.data;
        setPokemons(data);
    }

    return (
        <div>
            <PokemonSearchBar handlePokemonFetch={fetchPokemon} />
            {
                pokemons.map((pokemon) => {
                    return (
                        <div>
                            <h1>{pokemon.name}</h1>
                            <img src={pokemon.images.small} alt={pokemon.name} />
                        </div>
                    )
                })
            }
        </div>
    )
}