"use client";

import { upperCaseFirst } from "@/lib/utilities";

import { PokemonType } from "@/model/api/pokemon";

export type PokemonTypesProps = {
    types: Array<PokemonType> | Array<string>;
    size?: "big" | "small";
};

export default function PokemonTypesComponent(props: PokemonTypesProps) {
    const { size, types } = props;

    const pokemonTypeColorVariants: Record<string, string> = {
        grass: "bg-grass text-black",
        poison: "bg-poison text-white",
        fire: "bg-fire text-white",
        water: "bg-water text-white",
        bug: "bg-bug text-white",
        flying: "bg-gradient-to-b from-flying-top to-flying-bottom text-black",
        normal: "bg-normal text-black",
        electric: "bg-electric text-black",
        ground: "bg-gradient-to-b from-ground-top to-ground-bottom text-black",
        fairy: "bg-fairy text-black",
        fighting: "bg-fighting text-white",
        psychic: "bg-psychic text-white",
        rock: "bg-rock text-white",
        steel: "bg-steel text-black",
        ice: "bg-ice text-black",
        ghost: "bg-ghost text-white",
        dark: "bg-dark text-white",
        dragon: "bg-gradient-to-b from-dragon-top to-dragon-bottom text-black",
    };

    const typeSize: Record<string, string> = {
        small: "w-[40%] text-xs",
        big: "w-[90%] v-full text-lg",
    };

    return (
        <>
            <div className={`${size == "big" ? "grid grid-cols-3" : "flex"}`}>
                {types?.map((value, index) =>
                    typeof value === "string" ? (
                        <p
                            key={index}
                            className={`${pokemonTypeColorVariants[value]} ${
                                typeSize[props.size || "small"]
                            } rounded mb-3 p-0.25 mr-1 text-center`}
                        >
                            {upperCaseFirst(value)}
                        </p>
                    ) : (
                        <p
                            key={index}
                            className={`${
                                pokemonTypeColorVariants[value.type.name]
                            } ${
                                typeSize[props.size || "small"]
                            } rounded mb-3 p-0.25 mr-1 text-center`}
                        >
                            {upperCaseFirst(value.type.name)}
                        </p>
                    )
                )}
            </div>
        </>
    );
}
