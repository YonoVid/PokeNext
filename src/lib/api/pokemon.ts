import { NamedAPIResourceList } from "@/model/api/resource";
import { Pokemon, PokemonType } from "@/model/api/pokemon";
import { PokemonSpecies } from "@/model/api/dex";
import { Type } from "@/model/api/type";

export type APIListResponse = NamedAPIResourceList;
export type APIPokemonResponse = Pokemon;
export type APIDexResponse = PokemonSpecies;
export type APITypeResponse = Type;

const API_POKEMON = process.env.NEXT_PUBLIC_API_POKEMON_URL;
const API_DEX = process.env.NEXT_PUBLIC_API_DEX_URL;
const API_TYPE = process.env.NEXT_PUBLIC_API_TYPE_URL;

export async function getPokemonList(
    offset: number = 0,
    quantity: number = 12
): Promise<APIListResponse> {
    // Obtener datos desde el pokémon indicado en (offset + 1) y
    // en cantidad (quantity)
    try {
        const response = await fetch(
            `${API_POKEMON}?limit=${quantity}&offset=${offset}`
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Data received:", data);
        return data;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        return { count: 0, next: "", previous: "", results: [] };
    }
}

export async function getPokemonData(
    name: string = "",
    id: number = 0
): Promise<Partial<APIPokemonResponse>> {
    // Obtener datos desde el nombre del pokémon o su id
    try {
        const response = await fetch(`${API_POKEMON}${id || name}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Data received:", data);
        return data;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        return {
            id: 0,
            name: "Missigno",
            is_default: true,
        };
    }
}

export async function getPokemonDexData(
    name: string = "",
    id: number = 0
): Promise<Partial<APIDexResponse>> {
    // Obtener datos desde el nombre del pokémon o su id
    try {
        const response = await fetch(`${API_DEX}${id || name}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Data received:", data);
        return data;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        return {
            id: 0,
            name: "Missigno",
        };
    }
}

export async function getTypeData(
    name: string = "",
    id: number = 0
): Promise<Partial<APITypeResponse>> {
    // Obtener datos desde el nombre del pokémon o su id
    try {
        const response = await fetch(`${API_TYPE}${id || name}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Data received:", data);
        return data;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        return {
            id: 0,
            name: "Missigno",
        };
    }
}

export async function getWeakness(
    pokemonData: Partial<Pokemon>
): Promise<Array<string>> {
    var pokemonTypes: Array<Partial<Type>> = [];
    var pokemonWeakness: Set<string> = new Set<string>();
    var pokemonStrengths: Set<string> = new Set<string>();

    var promises: Array<Promise<any>> = [];

    pokemonData.types?.forEach(
        (value) =>
            (promises = promises.concat(
                getTypeData(value.type.name).then((response) => {
                    pokemonTypes = pokemonTypes.concat(response);
                })
            ))
    );

    await Promise.all(promises);

    pokemonTypes.forEach((type) => {
        type.damage_relations?.double_damage_from.forEach((weakness) => {
            pokemonWeakness.add(weakness.name);
        });
        if (pokemonTypes.length == 1) {
            return pokemonWeakness;
        }
        type.damage_relations?.half_damage_from.forEach((strength) => {
            pokemonStrengths.add(strength.name);
        });
    });

    var result = Array.from(pokemonWeakness).filter(
        (item) => !pokemonStrengths.has(item)
    );

    return result;
}
