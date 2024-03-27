import { NamedAPIResource } from "./resource";

export type Pokemon = {
    id: number; //The identifier for this resource.
    name: string; //The name for this resource.
    base_experience: number; //The base experience gained for defeating this Pokémon.
    height: number; //The height of this Pokémon in decimetres.
    is_default: boolean; //Set for exactly one Pokémon used as the default for each species.
    order: number; //Order for sorting. Almost national order, except families are grouped together.
    weight: number; //The weight of this Pokémon in hectograms.
    abilities: Array<PokemonAbility>; //A list of abilities this Pokémon could potentially have.
    forms: Array<NamedAPIResource>; //A list of forms this Pokémon can take on.
    game_indices: VersionGameIndex; //A list of game indices relevent to Pokémon item by generation.
    held_items: Array<PokemonHeldItem>; //A list of items this Pokémon may be holding when encountered.
    location_area_encounters: string; //A link to a list of location areas, as well as encounter details pertaining to specific versions.
    moves: Array<PokemonMove>; //A list of moves along with learn methods and level details pertaining to specific version groups.
    past_types: Array<PokemonTypePast>; //A list of details showing types this pokémon had in previous generations
    sprites: PokemonSprites; //A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at PokeAPI/sprites
    cries: PokemonCries; //A set of cries used to depict this Pokémon in the game. A visual representation of the various cries can be found at PokeAPI/cries
    species: NamedAPIResource; //The species this Pokémon belongs to.
    stats: Array<PokemonStat>; //A list of base stat values for this Pokémon.
    types: Array<PokemonType>; //A list of details showing types this Pokémon has.
};

export type PokemonAbility = {
    is_hidden: boolean; // Whether or not this is a hidden ability.
    slot: number; // The slot this ability occupies in this Pokémon species.
    ability: NamedAPIResource; // The ability the Pokémon may have.
};

export type VersionGameIndex = {
    game_index: number; // The internal id of an API resource within game data.
    version: NamedAPIResource; // The version relevent to this game index.
};

export type PokemonHeldItem = {
    item: NamedAPIResource; // The item the referenced Pokémon holds.
    version_details: Array<PokemonHeldItemVersion>; // The details of the different versions in which the item is held.
};

export type PokemonHeldItemVersion = {
    version: NamedAPIResource; // The version in which the item is held.
    rarity: number; // How often the item is held.
};

export type PokemonMove = {
    move: NamedAPIResource; // The move the Pokémon can learn.
    version_group_details: Array<PokemonMoveVersion>; // The details of the version in which the Pokémon can learn the move.
};

export type PokemonMoveVersion = {
    move_learn_method: NamedAPIResource; // The method by which the move is learned.
    version_group: NamedAPIResource; // The version group in which the move is learned.
    level_learned_at: number; // The minimum level to learn the move.
};

export type PokemonTypePast = {
    generation: NamedAPIResource; // The last generation in which the referenced pokémon had the listed types.
    types: Array<PokemonType>; // The types the referenced pokémon had up to and including the listed generation.
};

export type PokemonSprites = PokemonSpritesType & {
    other: {
        dream_world: Partial<PokemonSprites>;
        home: Partial<PokemonSprites>;
        "official-artwork": Partial<PokemonSprites>;
        showdown: Partial<PokemonSprites>;
    };
};

export type PokemonSpritesType = {
    front_default: string; // The default depiction of this Pokémon from the front in battle.
    front_shiny: string; // The shiny depiction of this Pokémon from the front in battle.
    front_female: string; // The female depiction of this Pokémon from the front in battle.
    front_shiny_female: string; // The shiny female depiction of this Pokémon from the front in battle.
    back_default: string; // The default depiction of this Pokémon from the back in battle.
    back_shiny: string; // The shiny depiction of this Pokémon from the back in battle.
    back_female: string; // The female depiction of this Pokémon from the back in battle.
    back_shiny_female: string; // The shiny female depiction of this Pokémon from the back in battle.
};

export type PokemonCries = {
    latest: string; // The latest depiction of this Pokémon's cry.
    legacy: string; // The legacy depiction of this Pokémon's cry.
};

export type PokemonStat = {
    stat: NamedAPIResource; //The stat the Pokémon has.
    effort: number; //The effort points (EV) the Pokémon has in the stat.
    base_stat: number; //The base value of the stat.
};

export type PokemonType = {
    slot: number; // The order the Pokémon's types are listed in.
    type: NamedAPIResource; // The type the referenced Pokémon has.
};

export type GenerationGameIndex = {
    game_index: number; // The internal id of an API resource within game data.
    generation: NamedAPIResource; // The generation relevent to this game index.
};
