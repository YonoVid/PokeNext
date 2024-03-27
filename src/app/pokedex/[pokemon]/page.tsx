"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAppSelector } from "@/lib/redux/hooks";
import { Pokemon } from "@/model/api/pokemon";
import PokemonData from "@/components/pokemonData/pokemonData";
import { getPokemonData } from "@/lib/api/pokemon";

export default function Pokemon({ params }: { params: { pokemon: string } }) {
    const { pokemon } = params;

    const router = useRouter();

    const [pokemonData, setPokemonData] = useState<Partial<Pokemon>>({});
    const storedPokemon = useAppSelector((state) => state.pokemon);

    const loadContent = () => {
        getPokemonData(pokemon).then((response) => {
            setPokemonData(response);
        });
    };

    useEffect(() => {
        if (!storedPokemon.value.name || storedPokemon.value.name.length == 0) {
            loadContent();
        } else {
            setPokemonData(storedPokemon.value);
        }
    }, []);

    return (
        <div className="v-full md:max-w-[80rem] flex justify-center m-auto backdrop-filter backdrop-brightness-[5.2]">
            <div className="w-full md:w-[56rem] mb-8 mx-5 p-4 backdrop-filter-none bg-white">
                <PokemonData pokemon={pokemonData} pokemonName={pokemon} />
                <div className="flex justify-end">
                    <button
                        className="select-none text-white font-medium text-center text-lg py-2 px-5 rounded bg-pokemon-orange click:outline-2"
                        type="button"
                        onClick={() => router.push("/pokedex")}
                    >
                        Explore more Pokémon
                    </button>
                </div>
            </div>
        </div>
    );
}
