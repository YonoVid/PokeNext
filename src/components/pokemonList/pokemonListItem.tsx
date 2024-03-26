"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { getPokemonData } from "@/app/_api/pokemon";
import { Pokemon } from "@/model/api/pokemon";
import { NamedAPIResource } from "@/model/api/resource";
import { formatId, upperCaseFirst } from "@/app/_lib/utilities";

export type PokemonListItemProps = NamedAPIResource;

export default function PokemonListItem(props: PokemonListItemProps) {
    const { name } = props;
    const [data, setData] = useState<Partial<Pokemon>>();

    useEffect(() => {
        if (!data) {
            getPokemonData(name).then((response) => {
                setData(response);
            });
        }
    }, [props]);

    return (
        <div className="grow p-2 rounded bg-white">
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
                <h2 className="text-xs pb-2 font-bold text-stone-400">
                    {formatId(data?.id) || "Loading..."}
                </h2>

                <h2 className="text-xl font-medium text-stone-800">
                    {upperCaseFirst(data?.name) || "Loading..."}
                </h2>

                {data?.types?.map((value, index) => (
                    <p key={index}>{value.type.name}</p>
                ))}
            </div>
        </div>
    );
}
