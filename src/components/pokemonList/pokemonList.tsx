"use client";

import { NamedAPIResource } from "@/model/api/resource";
import PokemonListItem from "./pokemonListItem";

export type PokemonListProps = { list: Array<NamedAPIResource> };

export default function PokemonList(props: PokemonListProps) {
    const { list } = props;

    return (
        <div className=" p-4 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 flex-row bg-white">
            {list &&
                list.map((value, index) => (
                    <PokemonListItem
                        key={index}
                        name={value.name}
                        url={value.url}
                    />
                ))}
        </div>
    );
}
