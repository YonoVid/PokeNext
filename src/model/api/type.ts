import { GenerationGameIndex } from "./pokemon";
import { Name, NamedAPIResource } from "./resource";

export type Type = {
    id: number; // The identifier for this resource.
    name: string; // The name for this resource.
    damage_relations: TypeRelations; // A detail of how effective this type is toward others and vice versa.
    past_damage_relations: Array<TypeRelationsPast>; // A list of details of how effective this type was toward others and vice versa in previous generations
    game_indices: Array<GenerationGameIndex>; // A list of game indices relevent to this item by generation.
    generation: NamedAPIResource; // The generation this type was introduced in.
    move_damage_class: NamedAPIResource; // The class of damage inflicted by this type.
    names: Array<Name>; // The name of this resource listed in different languages.
    pokemon: TypePokemon; // A list of details of Pokémon that have this type.
    moves: NamedAPIResource; // A list of moves that have this type.
};

export type TypePokemon = {
    slot: number; // The order the Pokémon's types are listed in.
    pokemon: NamedAPIResource; // The Pokémon that has the referenced type.
};

export type TypeRelations = {
    no_damage_to: Array<NamedAPIResource>; // A list of types this type has no effect on.
    half_damage_to: Array<NamedAPIResource>; // A list of types this type is not very effect against.
    double_damage_to: Array<NamedAPIResource>; // A list of types this type is very effect against.
    no_damage_from: Array<NamedAPIResource>; // A list of types that have no effect on this type.
    half_damage_from: Array<NamedAPIResource>; // A list of types that are not very effective against this type.
    double_damage_from: Array<NamedAPIResource>; // A list of types that are very effective against this type.
};

export type TypeRelationsPast = {
    generation: NamedAPIResource; // The last generation in which the referenced type had the listed damage relations
    damage_relations: TypeRelations; // The damage relations the referenced type had up to and including the listed generation
};
