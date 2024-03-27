"use client";

import { upperCaseFirst } from "@/lib/utilities";

import { PokemonStat } from "@/model/api/pokemon";

export type PokemonStatsProps = {
    stats: Array<PokemonStat>;
};

export default function PokemonStats(props: PokemonStatsProps) {
    return (
        <div className="my-4 p-5 rounded bg-pokemon-gray">
            <h2 className="text-xl text-stone-800">Stats</h2>
            <div className="my-4 grid grid-cols-6 gap-2 h-[80%]">
                {props?.stats?.map((value, index) => (
                    <PokemonStat key={index} stat={value} />
                ))}
            </div>
        </div>
    );
}

export function PokemonStat(props: { stat: PokemonStat }) {
    const { stat } = props;

    const boxColor: Record<string, string> = {
        filled: "bg-pokemon-blue",
        default: "bg-white",
    };

    return (
        <>
            <div className="grid grid-row-16 gap-1 ">
                {Array.from(Array(15)).map((value, index) => (
                    <div
                        key={index}
                        className={`${
                            boxColor[
                                (15 - index) * 15 <= stat.base_stat
                                    ? "filled"
                                    : "default"
                            ]
                        }
                              flex`}
                    ></div>
                ))}
                <h3 className="text-sm text-black text-center font-semibold">
                    {stat.stat.name.toUpperCase()}
                </h3>
            </div>
        </>
    );
}
