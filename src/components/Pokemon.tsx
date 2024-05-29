import React from "react";
import { useParams } from "react-router-dom";
import { usePokemon } from "../hooks/usePokemon";


export default function Pokemon() {
    const { id } = useParams();
    const { data: pokemon, isLoading, error } = usePokemon(Number(id));

    if (isLoading) {
        return <div>Loading Now...</div>;
    }
    if (error) {
        return <div>Error on Loading!</div>;
    }

    return (
        <div>
            <p>id: {id}</p>
            <p>name: {pokemon?.name}</p>
            <p>weight: {pokemon?.weight}</p>
            <p>height: {pokemon?.height}</p>
        </div>
    );
}