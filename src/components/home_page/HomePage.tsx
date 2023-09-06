import { useEffect, useState } from "react";

import PokemonSearchBar from "../pokemon_search_bar/PokemonSearchBar";

import "./HomePage.css";


export default function HomePage() { 
    const [pokemons, setPokemons] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);



    return (
        <div>
            <PokemonSearchBar setLoading={setLoading} setPokemons={setPokemons} />
            {loading && <h1>Loading...</h1>}
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

