import './PokemonCard.css';

export default function PokemonCard(props) { 
    const { pokemon } = props;

    return (
        <div className='pokemon-card-container'>
            <h3>{pokemon.name}</h3>
            <img width={240} height={330} src={pokemon.images.small} alt={pokemon.name} />
        </div>
    )
}