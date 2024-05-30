import useSWR from "swr";

type PokemonResult = {
    name: string,
    weight: number,
    height: number,
    abilityUrls: Array<string>,
};

const pokemonFetcher = (key: string) => fetch("https://pokeapi.co/api/v2/"+ key)
    .then((response) => (response.ok ? response.json() : Promise.reject(response)))
    .then((response) => {
        return {
            name: response.name,
            weight: response.weight,
            height: response.height,
            abilityUrls: response.abilities.map((value) => value.ability.url),
        } as PokemonResult;
    });


export function usePokemon(id?: number) {
    const key = id ? `pokemon/${id}` : null;
    return useSWR(key, pokemonFetcher);
};

// refer: https://countstheclouds.com/posts/nextjs-useswr-multiple-loading/
function pokemonAbilityFetcher(urls: Array<string>) {
    const fetcher = (url) => fetch(url).then((response) => (response.ok? response.json() : Promise.reject(response))
        .then((response) => {
            const effectNames: Array<any> = response.names;
            const abilityName = effectNames.find((value) => value.language.name === "ja").name;
            return abilityName;
        }
    ));
    return Promise.all(urls.map(fetcher));
}

export function usePokemonAbility(abilityUrls: Array<string>) {
    return useSWR(abilityUrls, pokemonAbilityFetcher);
}