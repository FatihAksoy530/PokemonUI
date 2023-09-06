import "./PokemonSearchBar.css";

export default function PokemonSearchBar(props) { 
    const { handlePokemonFetch } = props;

    return (
        <div className="pokemon-search-container">
            <h2>Who are you looking for?</h2>
            <form action="" onSubmit={handlePokemonFetch}>
                <label htmlFor="search-pokemon">Search Pokemon</label>
                <input id="search-pokemon" type="text" />
                <button>GO</button>
            </form>
        </div>
    )
}