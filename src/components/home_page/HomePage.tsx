import { useEffect, useState } from "react";

import PokemonSearchBar from "../pokemon_search_bar/PokemonSearchBar";
import PokemonCard from "../pokemon_card/PokemonCard";
import PokeballSpinner from "../pokeball_spinner/PokeballSpinner";

import "./HomePage.css";


export default function HomePage() { 
    const [pokemons, setPokemons] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedCards, setSelectedCards] = useState([]);


    const handleCardClick = (cardIndex) => {
        if (selectedCards.includes(cardIndex)) {
            // If the card is already selected, remove it from the array
            setSelectedCards(prevCards => prevCards.filter(index => index !== cardIndex));
        } else {
            // If the card isn't selected, add it to the array
            setSelectedCards(prevCards => [...prevCards, cardIndex]);
        }
    }

    return (
        <div className="home-page-container">
            <PokeballSpinner loading={ loading } />
            <PokemonSearchBar setSelectedCards={setSelectedCards} setLoading={setLoading} setPokemons={setPokemons} />
            <div className="pokemons-container">
                {
                    pokemons.map((pokemon) => {
                        return (
                            
                            <PokemonCard
                                key={pokemon.id}
                                pokemon={pokemon}
                                flippedClass={selectedCards.includes(pokemon.id) ? "flipped" : ""}
                                handleCardClick={handleCardClick}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

