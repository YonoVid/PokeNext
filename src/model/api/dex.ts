import {
    APIResource,
    Description,
    FlavorText,
    Name,
    NamedAPIResource,
} from "./resource";

export type PokemonSpecies = {
    id: number; // The identifier for this resource.
    name: string; // The name for this resource.
    order: number; // The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage.
    gender_rate: number; // The chance of this Pokémon being female, in eighths; or -1 for genderless.
    capture_rate: number; // The base capture rate; up to 255. The higher the number, the easier the catch.
    base_happiness: number; // The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon.
    is_baby: boolean; // Whether or not this is a baby Pokémon.
    is_legendary: boolean; // Whether or not this is a legendary Pokémon.
    is_mythical: boolean; // Whether or not this is a mythical Pokémon.
    hatch_counter: number; // Initial hatch counter: one must walk Y × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's. Y varies per generation. In Generations II, III, and VII, Egg cycles are 256 steps long. In Generation IV, Egg cycles are 255 steps long. In Pokémon Brilliant Diamond and Shining Pearl, Egg cycles are also 255 steps long, but are shorter on special dates. In Generations V and VI, Egg cycles are 257 steps long. In Pokémon Sword and Shield, and in Pokémon Scarlet and Violet, Egg cycles are 128 steps long.
    has_gender_differences: boolean; // Whether or not this Pokémon has visual gender differences.
    forms_switchable: boolean; // Whether or not this Pokémon has multiple forms and can switch between them.
    growth_rate: NamedAPIResource; // The rate at which this Pokémon species gains levels.
    pokedex_numbers: Array<PokemonSpeciesDexEntry>; // A list of Pokedexes and the indexes reserved within them for this Pokémon species.
    egg_groups: Array<NamedAPIResource>; // A list of egg groups this Pokémon species is a member of.
    color: NamedAPIResource; // The color of this Pokémon for Pokédex search.
    shape: NamedAPIResource; // The shape of this Pokémon for Pokédex search.
    evolves_from_species: NamedAPIResource; // The Pokémon species that evolves into this Pokemon_species.
    evolution_chain: APIResource; // The evolution chain this Pokémon species is a member of.
    habitat: NamedAPIResource; // The habitat this Pokémon species can be encountered in.
    generation: NamedAPIResource; // The generation this Pokémon species was introduced in.
    names: Array<Name>; // The name of this resource listed in different languages.
    pal_park_encounters: Array<PalParkEncounterArea>; // A list of encounters that can be had with this Pokémon species in pal park.
    flavor_text_entries: Array<FlavorText>; // A list of flavor text entries for this Pokémon species.
    form_descriptions: Array<Description>; // Descriptions of different forms Pokémon take on within the Pokémon species.
    genera: Array<Genus>; // The genus of this Pokémon species listed in multiple languages.
    varieties: Array<PokemonSpeciesVariety>; // A list of the Pokémon that exist within this Pokémon species.
};

export type Genus = {
    genus: string; // The localized genus for the referenced Pokémon species
    language: NamedAPIResource; // The language this genus is in.
};

export type PokemonSpeciesDexEntry = {
    entry_number: number; // The index number within the Pokédex.
    pokedex: NamedAPIResource; // The Pokédex the referenced Pokémon species can be found in.
};

export type PalParkEncounterArea = {
    base_score: number; // The base score given to the player when the referenced Pokémon is caught during a pal park run.
    rate: number; // The base rate for encountering the referenced Pokémon in this pal park area.
    area: NamedAPIResource; // The pal park area where this encounter happens.
};

export type PokemonSpeciesVariety = {
    is_default: boolean; // Whether this variety is the default variety.
    pokemon: NamedAPIResource; // The Pokémon variety.
};
