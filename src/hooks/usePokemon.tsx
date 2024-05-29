import useSWR from "swr";

type Result = {
    name: string,
    weight: number,
    height: number,
};

const fetcher = (key: string) => fetch("https://pokeapi.co/api/v2/"+ key)
    .then((response) => (response.ok ? response.json() : Promise.reject(response)))
    .then((response) => response as Result);


export function usePokemon(id?: number) {
    const key = id ? `pokemon/${id}` : null;
    return useSWR(key, fetcher);
};