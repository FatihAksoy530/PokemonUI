import { useEffect, useState } from "react";
import { useError } from "../../routes/root/Root";
import PokemonSearchBar from "../../components/pokemon_search_bar/PokemonSearchBar";
import PokemonCard from "../../components/pokemon_card/PokemonCard";
import PokeballSpinner from "../../components/pokeball_spinner/PokeballSpinner";
import NoSearchResult from "../../components/no_search_result/NoSearchResult";
import { usePageLoader } from "../../contexts/PageLoaderProvider/PageLoaderProvider";
import { fetchPokemon } from "../../utils/apiFunctions";

import "./HomePage.css";


export default function HomePage() { 
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedCards, setSelectedCards] = useState([]);
    const [noResult, setNoResult] = useState<boolean>(true);
    const { showError } = useError();
    const { finishLoading } = usePageLoader();

    const handleCardClick = (cardIndex) => {
        if (selectedCards.includes(cardIndex)) {
            // If the card is already selected, remove it from the array
            setSelectedCards(prevCards => prevCards.filter(index => index !== cardIndex));
        } else {
            // If the card isn't selected, add it to the array
            setSelectedCards(prevCards => [...prevCards, cardIndex]);
        }
    }


    useEffect(() => { 
        const url = new URL(window.location.href);
        const searchTerm = url.searchParams.get("searchTerm");
        const searchByFilter = url.searchParams.get("searchByFilter") || "name";
        finishLoading();
        if (!searchTerm) {
            return;
        }
        setLoading(true);
        setNoResult(false);
        fetchPokemon(searchTerm, searchByFilter)
            .then((response) => {
                setPokemons(response.data.data);
                if (response.data.data.length === 0) { 
                    setNoResult(true);
                }
                else {
                    setNoResult(false);
                }
            })
            .catch((error) => {
                console.log(error);
                showError();
                setPokemons([]);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [finishLoading, showError])


    return (
        <div className="home-page-container">
            <PokemonSearchBar setNoResult={setNoResult} setSelectedCards={setSelectedCards} setLoading={setLoading} setPokemons={setPokemons} />
            { noResult && <NoSearchResult />}
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
            <PokeballSpinner loading={ loading } />
        </div>
    )
}

