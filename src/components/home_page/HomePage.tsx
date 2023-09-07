import { useEffect, useState } from "react";

import PokemonSearchBar from "../pokemon_search_bar/PokemonSearchBar";
import PokemonCard from "../pokemon_card/PokemonCard";

import "./HomePage.css";


export default function HomePage() { 
    const [pokemons, setPokemons] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);



    return (
        <div className="home-page-container">
            <PokemonSearchBar setLoading={setLoading} setPokemons={setPokemons} />
            {loading && <h1>Loading...</h1>}
            <div className="pokemons-container">
                {
                    pokemons.map((pokemon) => {
                        return (
                            
                                <PokemonCard key={pokemon.id} pokemon={pokemon} />
                        )
                    })
                }
            </div>
        </div>
    )
}

