export type NamedAPIResourceList = {
    count: number; // The total number of resources available from this API.
    next: string; // The URL for the next page in the list.
    previous: string; // The URL for the previous page in the list.
    results: Array<NamedAPIResource>; // A list of named API resources.
};

export type NamedAPIResource = {
    name: string; //	The name of the referenced resource.
    url: string; // The URL of the referenced resource.
};

export type APIResource = {
    url: string; // The URL of the referenced resource.
};

export type Description = {
    description: string; // The localized description for an API resource in a specific language.
    language: NamedAPIResource; // The language this name is in.
};

export type FlavorText = {
    flavor_text: string; // The localized flavor text for an API resource in a specific language. Note that this text is left unprocessed as it is found in game files. This means that it contains special characters that one might want to replace with their visible decodable version. Please check out this issue to find out more.
    language: NamedAPIResource; // The language this name is in.
    version: NamedAPIResource; // The game version this flavor text is extracted from.
};

export type Name = {
    name: string; // The localized name for an API resource in a specific language.
    language: NamedAPIResource; // The language this name is in.
};
