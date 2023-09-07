import { useState, useEffect } from 'react';

import typeColors from '../../utils/pokemonTypeColors';
import './PokemonCard.css';


export default function PokemonCard(props) { 
    const { pokemon, flippedClass, handleCardClick } = props;
    const [pokemonTypes, setPokemonTypes] = useState<string[]>([]);
    const [pokemonColors, setPokemonColors] = useState({
        color: 'black',
        backgroundColor: 'white'
    });



    useEffect(() => {
        // check if the pokemon has a type
        if (!pokemon.types || pokemon.types.length === 0) {
            return;
        }
        else {
            setPokemonTypes(pokemon.types);
            const { color, backgroundColor } = typeColors[pokemon.types[0]];
            setPokemonColors({
                color: color,
                backgroundColor: backgroundColor
            });
        }
     }, [pokemon]);

    return (

        <div className='pokemon-card-container' onClick={() => { handleCardClick(pokemon.id) }}>
                <div className='pokemon-card-container-front'>
                    <div className='pokemon-card-container-front-header'>
                        <h3>{pokemon.name}</h3>
                    </div>
                    <div className='pokemon-card-container-front-body'>
                        <img width={240} height={330} src={pokemon.images.small} alt={pokemon.name} />
                    </div>
                </div>
                <div className={`pokemon-card-container-back ${flippedClass}`} style={{
                    background: pokemonColors['backgroundColor'],
                    color: pokemonColors['color']
                    }}>
                    <div className='pokemon-card-container-back-header'>
                        <h3>{ pokemon.name }</h3>
                    </div>
                    <div className='pokemon-card-container-back-body'>
                            <ul>
                                <li>Super Type: {pokemon.supertype}</li>
                                <li>HP: {pokemon.hp}</li>
                                <li>Number: { pokemon.number }</li>
                                <li>Artist: {pokemon.artist}</li>
                                <li>Rarity: {pokemon.rarity}</li>
                        <li>Types: <ul>
                                        {pokemonTypes.map((type, index) => {
                                            return (
                                                <>
                                                    <li key={index}>{type}</li>
                                                </>
                                            )
                                        })}
                                    </ul>
                                </li>
                            </ul>
                    </div>
                </div>
        </div>
    )
}