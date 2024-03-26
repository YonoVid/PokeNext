"use client";

import { useEffect, useState } from "react";

import { getPokemonList } from "../_api/pokemon";

import PokemonList from "@/components/pokemonList/pokemonList";

export default function Pokedex() {
    const [pokemonList, setPokemonList] = useState<Array<any>>([]);

    const loadContent = () => {
        getPokemonList(pokemonList.length).then((response) => {
            var newList = pokemonList.concat(response.results);

            setPokemonList(newList);
            console.log(newList);
        });
    };

    useEffect(() => {
        if (pokemonList.length == 0) {
            loadContent();
        }
    }, []);

    return (
        <>
            <div className="px-[5%] md:px-[17%]">
                <h1>Pokédex</h1>
                {pokemonList.length > 0 && <PokemonList list={pokemonList} />}
            </div>
        </>
    );
}
