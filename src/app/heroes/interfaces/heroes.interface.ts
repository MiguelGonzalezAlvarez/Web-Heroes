export interface Heroe {
    id?: string;
    superhero: string;
    publisher: Publisher;
    alterEgo: string;
    firstAppearance: string;
    characters: string;
    altImage?: string;
}

export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}
