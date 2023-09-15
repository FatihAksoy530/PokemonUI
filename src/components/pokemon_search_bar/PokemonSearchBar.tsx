import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { fetchPokemon } from "../../utils/apiFunctions";

import "./PokemonSearchBar.css";


export default function PokemonSearchBar(props) { 
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchByFilter, setSearchByFilter] = useState<string>("name");
    const { setNoResult, setPokemons, setLoading, setSelectedCards } = props;

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearchByFilterChange = (event) => { 
        setSearchByFilter(event.target.value);
    }

    const updateUrl = (searchTerm : string, searchByFilter : string) => {
        const url = new URL(window.location.href);
        url.searchParams.set("searchTerm", searchTerm);
        url.searchParams.set("searchByFilter", searchByFilter);
        window.history.pushState({}, "", url);
     }

    const handlePokemonFetch = (event) => { 
        event.preventDefault();
        updateUrl(searchTerm, searchByFilter);
        setSelectedCards([]);
        setPokemons([]);
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
                setPokemons([]);
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
                    <option value="types">Type</option>
                </select>
            </form>
        </div>
    )
}