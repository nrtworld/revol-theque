import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collector } from '../models/collector.model';
import { Subject } from 'rxjs';

@Injectable()
export class DataCollectorService {

    dataSubject = new Subject<string>();


    title: string = '';
    titleMinify: string = '';
    urlStart: string = 'https://fr.wikipedia.org/wiki/';
    url: string;
    data: string = '';
    table: string[];
    infos: string[] = [];
    mecanismes: string[] = [];
    themes: string[] = [];
    joueurs: string = '';
    age: string = '';
    temps: string = '';

    constructor(private _http: HttpClient) { }

    emitData() {
        this.dataSubject.next(this.data);
    }
    Init() {
        this.title = '';
        this.titleMinify = '';
        this.url = '';
        this.data = '';
        this.table = [];
        this.infos = [];
        this.mecanismes = [];
        this.themes = [];
        this.joueurs = '';
        this.age = '';
        this.temps = '';
    }

    initCollect(title: string) {
        this.Init();
        this.title = title;
        this.titleMinify = this.minifyString(this.title);
        this.url = this.urlStart + this.titleMinify;
        this._http.get(this.url, {
            responseType: 'text', headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).subscribe((data: string) => {
            this.data = data;
            if (data.includes('<div id="homonymie" class="homonymie">')) {
                this.initCollect(title + '_(jeu)');
            }
            this.emitData();
            /*  this.extractInfo(this.data); */
            /* return new Collector(this.mecanismes,this.themes,this.joueurs,this.age,this.temps); */

        }, (error) => {
            this.title = this.allFirstLetterInUppercase(this.title);
            this.titleMinify = this.minifyString(this.title);
            this.url = this.urlStart + this.titleMinify;
            this._http.get(this.url, {
                responseType: 'text', headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).subscribe((data) => {
                this.data = data;
                if (data.includes('<div id="homonymie" class="homonymie">')) {
                    this.initCollect(title + '_(jeu)');
                }
                this.emitData();
                /*  this.extractInfo(this.data); */
                /*  return new Collector(this.mecanismes,this.themes,this.joueurs,this.age,this.temps); */
            });
        }, () => {
            this.emitData();
            /*  this.extractInfo(this.data);
             return new Collector(this.mecanismes,this.themes,this.joueurs,this.age,this.temps); */
        });
        this.emitData();
    }

    notAlNum(info: string) {
        var index = 0;
        var size = info.length;
        var isNotAllNum: boolean = true;
        var reg: RegExp = new RegExp('[a-zA-Z0-9]');
        if (info == '' || info == ' ') {
            return isNotAllNum;
        }
        while (index < size) {
            if (info[index].match(reg)) {
                return false;
            }
            ++index;
        }
        return isNotAllNum;
    }

    extractInfo(data: string) {

        this.table = data.split('<table>');
        var tableauInfo: string = data.split('<table>')[1];
        if (tableauInfo && tableauInfo.length) {
            //suppression du code espace
            var tableauInfo2 = tableauInfo.replace('&#160;', ' ');
            while (tableauInfo2 !== tableauInfo2.replace('&#160;', ' ')) {
                tableauInfo2 = tableauInfo2.replace('&#160;', ' ');
            }
            //suppression des sauts de lignes
            while (tableauInfo2 != tableauInfo2.replace('\n', '')) {
                tableauInfo2 = tableauInfo2.replace('\n', '');
            }

            //récupération des info situées entre balises
            var reg: RegExp = new RegExp('<[^>]+>');
            this.infos = tableauInfo2.split(reg);
            var i = 0;
            for (let info of this.infos) {
                if (info == null || this.notAlNum(info)) {
                    this.infos.splice(i, 1);
                }
                ++i;
            }
        }
        var indexMeca = this.infos.indexOf(this.infos.find(s => s.includes('Mécanismes')));
        var indexTheme = this.infos.indexOf(this.infos.find(s => s.includes('Thème')));
        var indexJoueurs = this.infos.indexOf(this.infos.find(s => s.includes('Joueur(s)')));
        var indexAge = this.infos.indexOf(this.infos.find(s => s.includes('Âge')));
        var indexTemps = this.infos.indexOf(this.infos.find(s => s.includes('Durée annoncée')));
        
        
        //MECANISME
        indexTheme = indexTheme == -1?indexJoueurs: indexTheme;
        this.mecanismes = this.getInfo(this.infos, indexMeca, indexTheme);
        //THEME
        this.themes = this.getInfo(this.infos, indexTheme, indexJoueurs);
        //JOUEURS
        this.joueurs = this.getInfo(this.infos, indexJoueurs, indexAge)[0];
        //AGE
        this.age = this.getInfo(this.infos, indexAge, indexTemps)[0];
        //TEMPS
        this.temps = this.getInfo(this.infos, indexTemps, null)[0];

        return new Collector(this.mecanismes, this.themes, this.joueurs, this.age, this.temps);
    }

    getInfo(liste: string[], debut: number, fin: number) {
        var results: string[] = fin ? liste.slice(debut + 1, fin) : liste.slice(debut + 1);
        return results;
    }

    minifyString(s: string) {
        var sm = s.replace(' ', '_');
        while (sm != sm.replace(' ', '_')) {
            sm = sm.replace(' ', '_');
        }
        return sm;
    }

    allFirstLetterInUppercase(s: string) {
        var tab = s.split(' ');
        for (var word in tab) {
            tab[word] = tab[word].substr(0, 1).toUpperCase() + tab[word].substr(1, tab[word].length);
        }
        return tab.join(' ');

    }

}