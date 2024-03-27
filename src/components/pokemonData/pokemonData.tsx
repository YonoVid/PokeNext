"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { cleanString, formatId, upperCaseFirst } from "@/lib/utilities";
import {
    getPokemonData,
    getPokemonDexData,
    getTypeData,
    getWeakness,
} from "@/lib/api/pokemon";

import { Pokemon, PokemonType } from "@/model/api/pokemon";
import PokemonTypes from "./pokemonTypes";
import { PokemonSpecies } from "@/model/api/dex";
import { Type } from "@/model/api/type";
import PokemonStats from "./pokemonStats";

export type PokemonListItemProps = {
    pokemon: Partial<Pokemon>;
    pokemonName: string;
};

export default function PokemonDataComponent(props: PokemonListItemProps) {
    const [pokemon, setPokemon] = useState<Partial<Pokemon>>();
    const [species, setSpecies] = useState<Partial<PokemonSpecies>>();
    const [weakness, setWeakness] = useState<Array<string>>();

    const loadData = () => {
        if (!props.pokemon) {
            getPokemonData(props.pokemonName).then((pokemon) => {
                setPokemon(pokemon);
                getWeakness(pokemon).then((weakness) => {
                    setWeakness(weakness);
                });
            });
        } else {
            setPokemon(props.pokemon);
            getWeakness(props.pokemon).then((weakness) => {
                setWeakness(weakness);
            });
        }
        if (!species) {
            getPokemonDexData(props.pokemonName).then((response) => {
                setSpecies(response);
            });
        }
    };

    useEffect(() => {
        loadData();
    }, [props]);

    return (
        <>
            <div className="grow p-2 mb-10 rounded bg-white">
                <div className="mb-20 grid grid-cols-2 place-content-center space-x-1">
                    <h1 className="text-5xl text-stone-800 text-right">
                        {upperCaseFirst(pokemon?.name || "Pokémon")}
                    </h1>
                    <h1 className="text-5xl pl-5 text-stone-400">
                        {formatId(pokemon?.id || 0)}
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 space-x-5">
                    <div className="grid grid-rows-2">
                        <div className="aspect-square p-10 flex justify-center rounded bg-slate-100 relative">
                            {pokemon?.sprites && (
                                <Image
                                    className="p-2"
                                    fill={true}
                                    sizes="(max-width: 500px) 100vw, (max-width: 500px) 50vw, 33vw"
                                    src={
                                        pokemon?.sprites?.other[
                                            "official-artwork"
                                        ].front_default || ""
                                    }
                                    alt={`${pokemon?.name} image`}
                                />
                            )}
                        </div>
                        <PokemonStats stats={pokemon?.stats || []} />
                    </div>
                    <div>
                        {species?.flavor_text_entries && (
                            <h1 className="my-2 text-black font-normal text-[1.2rem]">
                                {cleanString(
                                    species?.flavor_text_entries[0].flavor_text
                                )}
                            </h1>
                        )}
                        <div className="p-4 my-5 text-[1.3] grid grid-rows-3 grid-flow-col rounded-lg bg-pokemon-blue">
                            <div>
                                <h2 className="pb-2 text-white">Height</h2>
                                <h3 className="text-[1.5rem] pb-2 text-stone-800">
                                    {pokemon?.height && pokemon?.height / 10} m
                                </h3>
                            </div>
                            <div>
                                <h2 className="pb-2 text-white">Weight</h2>
                                <h3 className="text-2xl pb-2 text-stone-800">
                                    {pokemon?.weight && pokemon?.weight / 10} Kg
                                </h3>
                            </div>

                            <div className="text-black">
                                <h2 className="pb-2 text-white">Gender</h2>
                                {species?.gender_rate != -1 ? (
                                    <>
                                        <span className="material-icons">
                                            male
                                        </span>
                                        <span className="material-icons">
                                            female
                                        </span>
                                    </>
                                ) : (
                                    <h3>Unknown</h3>
                                )}
                            </div>

                            <div>
                                <h2 className="pb-2 text-white">Category</h2>
                                <h3 className="text-2xl pb-2 text-stone-800">
                                    {species?.genera &&
                                        species?.genera?.find((value) =>
                                            value.language.name.includes("en")
                                        )?.genus}
                                </h3>
                            </div>
                            <div>
                                <h2 className="pb-2 text-white">Ability</h2>
                                {pokemon?.abilities &&
                                    pokemon?.abilities?.map((value, index) => (
                                        <div className="flex" key={index}>
                                            <h3 className="text-2xl pb-2 text-stone-800">
                                                {upperCaseFirst(
                                                    value.ability.name
                                                )}
                                            </h3>
                                            <span className="material-icons my-auto ml-2 w-1/2">
                                                help
                                            </span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="pb-4 pt-0">
                            <h2 className="text-xl pb-2 text-stone-800">
                                Type
                            </h2>

                            <PokemonTypes
                                size="big"
                                types={pokemon?.types || []}
                            />
                        </div>
                        <div className="pb-4 pt-0">
                            <h2 className="text-xl pb-2 text-stone-800">
                                Weakness
                            </h2>

                            <PokemonTypes size="big" types={weakness || []} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
