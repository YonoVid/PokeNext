"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useAppDispatch } from "@/lib/redux/hooks";
import { updatePokemon } from "@/lib/redux/features/pokemon";
import { getPokemonData } from "@/lib/api/pokemon";
import { formatId, upperCaseFirst } from "@/lib/utilities";

import { Pokemon } from "@/model/api/pokemon";
import { NamedAPIResource } from "@/model/api/resource";
import PokemonTypes from "../pokemonData/pokemonTypes";

export type PokemonListItemProps = NamedAPIResource;

export default function PokemonListItemComponent(props: PokemonListItemProps) {
    const { name } = props;
    const [data, setData] = useState<Partial<Pokemon>>();

    const router = useRouter();
    const dispatch = useAppDispatch();

    const onClick = () => {
        if (data && data?.name && data.name?.length > 0) {
            console.log(data.name);
            dispatch(updatePokemon(data));
            router.push(`/pokedex/${data?.name || ""}`);
        }
    };

    useEffect(() => {
        if (!data) {
            getPokemonData(name).then((response) => {
                setData(response);
            });
        }
    }, [props]);

    return (
        <div
            className="grow p-2 mb-10 rounded bg-white outline outline-black outline-0 hover:outline-2 hover:z-50"
            onClick={onClick}
        >
            <div className="aspect-square p-10 flex justify-center rounded bg-slate-100 relative">
                {data?.sprites && (
                    <Image
                        className="p-2"
                        fill={true}
                        sizes="(max-width: 500px) 100vw, (max-width: 500px) 50vw, 33vw"
                        src={
                            data?.sprites?.other["official-artwork"]
                                .front_default || ""
                        }
                        alt={`${data?.name} image`}
                    />
                )}
            </div>
            <div className="p-4 pt-0">
                <h2 className="text-sm pb-2 font-semibold text-stone-400">
                    {formatId(data?.id) || "Loading..."}
                </h2>

                <h2 className="pb-1 text-2xl font-medium text-stone-800">
                    {upperCaseFirst(data?.name) || "Loading..."}
                </h2>

                <PokemonTypes types={data?.types || []} />
            </div>
        </div>
    );
}
