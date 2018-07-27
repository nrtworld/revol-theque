export class Collector {
    mecanismes: string[] = [];
    themes: string[] = [];
    joueursMin: number;
    joueursMax: number;
    age: number;
    temps: number;

    constructor(mecanismes: string[], themes: string[], joueurs: string, age: string, temps: string) {
        this.mecanismes = mecanismes;
        this.themes = themes;
        this.extractJoueurs(joueurs);
        this.extractAge(age);
        this.extractTemps(temps);
    }


    extractJoueurs(joueurs: string) {
        var tab = joueurs.split(' ');
        this.joueursMin = Number.parseInt(tab[0]);
        this.joueursMax = Number.parseInt(tab[2]);
        console.log('joueur : '+joueurs);
        console.log('tab0 : '+tab[0]);
        console.log('tab1 : '+tab[1]);
    }

    extractAge(age: string) {
        var tab = age.split(' ');
        this.age = Number.parseInt(tab[3]);
    }

    extractTemps(temps: string) {
        
        var tab = temps.split(' ');
        for (let seq of tab) {
            console.log('seq : '+seq);
            if (seq!== null && seq.length && seq.trimLeft[0].match('[0-9]')) {
                if (tab[seq + 1] == 'min') {
                    this.temps = Number.parseInt(seq);
                } else if (tab[seq + 1] == 'h' || tab[seq + 1] == 'H') {
                    this.temps = Number.parseInt(seq) * 60;
                }
                break;
            }
        }
    }
}