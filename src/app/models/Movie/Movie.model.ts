import { UUID } from "angular2-uuid";

export class Movie{
    id: string;
    title: string;
    realisateur: string[];
    scenariste: string[];
    photo: string;
    producteur: string[];
    acteur: string[];
    sortie: Date;
    synopsis: string;
    categories: string[];
    isPret: boolean;
    nameOfPret: string;
    isTvShow: boolean;
    Saisons: string;

    constructor(){
        this.id = UUID.UUID();
    }
}