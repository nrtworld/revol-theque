import { UUID } from "angular2-uuid";

export class Game{
    id: string;
    title: string;
    photo: string;
    nbJoueursMin: number;
    nbJoueursMax: number;
    tpsJeux: number;
    synopsis: string;
    categories: string[];

    constructor(){
        this.id = UUID.UUID();
    }
}