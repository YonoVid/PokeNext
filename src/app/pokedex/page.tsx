"use client";

import { useEffect, useRef, useState } from "react";

import { getPokemonList } from "@/lib/api/pokemon";

import PokemonList from "@/components/pokemonList/pokemonList";
import { NamedAPIResource } from "@/model/api/resource";
import { addPokemon } from "@/lib/redux/features/pokedex";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";

export default function Pokedex() {
    const [pokemonList, setPokemonList] = useState<Array<NamedAPIResource>>([]);
    // Stored data
    const dexList = useAppSelector((state) => state.dex.value);
    const dispatch = useAppDispatch();
    // Component reference for scrolling
    const divRef = useRef<HTMLDivElement>(null);
    // Load more content from API
    const loadContent = () => {
        getPokemonList(pokemonList.length).then((response) => {
            var newList = pokemonList.concat(response.results);

            setPokemonList(newList);

            dispatch(addPokemon(response.results));
            console.log("DEX STATE::", dexList);
        });
    };
    // Check if data is empty to retrive data from API
    useEffect(() => {
        if (pokemonList.length == 0) {
            console.log("DEX DATA STORED:: ", dexList);
            if (dexList.length == 0) {
                loadContent();
            } else {
                setPokemonList(dexList);
                if (divRef && divRef?.current) {
                    divRef?.current?.scroll({
                        top: divRef.current.scrollHeight,
                        behavior: "smooth",
                    });
                }
            }
        }
    }, []);

    return (
        <div className="v-full md:max-w-[80rem] flex justify-center m-auto backdrop-filter backdrop-brightness-[5.2]">
            <div className="w-full md:w-[56rem] mb-8 mx-5 p-4 backdrop-filter-none bg-white">
                <h1 className="text-3xl text-zinc-400">Pokédex</h1>
                <div className="my-5 grid grids-cols-1 md:grid-cols-3 md:justify-center flex-col md:flex-row">
                    <button
                        className="w-full md:w-64 float-left select-none text-white font-medium text-center text-lg py-2 px-5 rounded bg-pokemon-blue"
                        type="button"
                    >
                        Surprise me!
                    </button>
                    <h1 className="text-2xl mt-4 md:my-auto mr-4 text-zinc-400 md:text-right">
                        Sort by
                    </h1>
                    <button
                        className="select-none text-white font-medium text-center text-lg py-2 px-5 rounded bg-pokemon-gray"
                        type="button"
                    >
                        Lowest Number (First)
                    </button>
                </div>
                {pokemonList.length > 0 && <PokemonList list={pokemonList} />}
                <div ref={divRef} className="flex justify-center">
                    <button
                        className="select-none text-white font-medium text-center text-lg py-2 px-5 rounded bg-pokemon-blue click:outline-2"
                        type="button"
                        onClick={loadContent}
                    >
                        Load more Pokémon
                    </button>
                </div>
            </div>
        </div>
    );
}
