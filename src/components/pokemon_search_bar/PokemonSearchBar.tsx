import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { fetchPokemon } from "../../utils/apiFunctions";

import "./PokemonSearchBar.css";

export default function PokemonSearchBar(props) { 
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchByFilter, setSearchByFilter] = useState<string>("name");
    const { setPokemons, setLoading, setSelectedCards } = props;

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearchByFilterChange = (event) => { 
        setSearchByFilter(event.target.value);
    }

    const handlePokemonFetch = (event) => { 
        setSelectedCards([]);
        setPokemons([]);
        event.preventDefault();
        setLoading(true);
        fetchPokemon(searchTerm, searchByFilter)
            .then((response) => {
                setPokemons(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }


    return (
        <div className="pokemon-search-container">
            <h2>Who are you looking for?</h2>
            <form className="search-pokemon-form" action="" onSubmit={handlePokemonFetch}>
                <label className="visually-hidden" htmlFor="search-pokemon">Search Pokemon</label>
                <div className="input-wrapper">
                    <SearchIcon style={{ fontSize: '2rem'}} className="search-icon"/>
                    <input placeholder="E.g. Pikachu" id="search-pokemon" type="text" onChange={handleSearchTermChange}/>
                    <button className="go-button">GO</button>
                </div>
                <label className="visually-hidden" htmlFor="search-filters">Search Filters</label>
                <select id="search-filters" onChange={handleSearchByFilterChange} defaultValue="name">
                    <option value="name">Name</option>
                    <option value="type">Type</option>
                </select>
            </form>
        </div>
    )
}