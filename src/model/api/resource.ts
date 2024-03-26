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
