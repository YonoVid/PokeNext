import { NamedAPIResourceList } from "@/model/api/resource";
import { safeJsonParse } from "../_lib/utilities";
import { Pokemon } from "@/model/api/pokemon";

export type APIListResponse = NamedAPIResourceList;
export type APIResponse = Pokemon;

const API_POKEMON = process.env.API_POKEMON_URL;

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
): Promise<Partial<APIResponse>> {
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
