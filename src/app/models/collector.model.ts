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
        if (joueurs && joueurs.length) {
            var tab = joueurs.split(' ');
            this.joueursMin = Number.parseInt(tab[0]);
            this.joueursMax = Number.parseInt(tab[2]);
        }
    }

    extractAge(age: string) {
        if (age && age.length) {
            var tab = age.split(' ');
            this.age = Number.parseInt(tab[3]);
        }
    }

    extractTemps(temps: string) {
        if (temps && temps.length) {
            var tab = temps.split(' ');
            for (let seq of tab) {
                if (seq !== null && seq[0].match('[0-9]')) {
                    var unity = tab.pop();
                    if (unity == 'min' || unity == 'minutes' || unity == 'Minutes' || unity == 'Min') {
                        this.temps = Number.parseInt(seq);
                    } else if (unity == 'heures' ||unity == 'Heures' ||unity == 'h' ||unity == 'H') {
                        this.temps = Number.parseInt(seq) * 60;
                    }
                    break;
                }
            }
        }
    }
}