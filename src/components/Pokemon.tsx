import React from "react";
import { useParams } from "react-router-dom";
import { usePokemon, usePokemonAbility } from "../hooks/usePokemon";


export default function Pokemon() {
    const { id } = useParams();
    const { data: pokemon, isLoading: isPokemonLoading, error: pokemonError } = usePokemon(Number(id));
    const { data: abilities, isLoading: isAbilityLoading, error: abilityError} = usePokemonAbility(pokemon?.abilityUrls);

    if (isPokemonLoading) {
        return <div>Loading Now...</div>;
    }
    if (pokemonError) {
        return <div>Error on Loading</div>;
    }
    
    // pokemonのloadに成功したら以下を実行
    let abilityElements;
    if (isAbilityLoading) {
        abilityElements = <div>Loading Now...</div>;
    } else if (abilityError) {
        abilityElements = <div>Error on Loading</div>
    } else {
        abilityElements = abilities.map((value, index) => {
            return (
                <li key={index}>{value}</li>
            );
        });
    }

    return (
        <div>
            <p>id: {id}</p>
            <p>name: {pokemon?.name}</p>
            <p>weight: {pokemon?.weight}</p>
            <p>height: {pokemon?.height}</p>
            <p>abilities: </p>
            <ul>
                {abilityElements}
            </ul>
        </div>
    );
}