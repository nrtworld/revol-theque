import { Injectable } from "@angular/core";
import { Movie } from "../../models/Movie/movie.model";
import { Subject } from "rxjs";
import * as firebase from 'firebase';
import { FiltreMovie } from "../../models/Movie/filtreMovie.model";
import { UUID } from "angular2-uuid";

@Injectable()
export class movieService {

    movies: Movie[] = [];
    moviesSubject = new Subject<Movie[]>();


    constructor() {
        this.getMovies();
    }

    emitMovies() {
        this.moviesSubject.next(this.movies.slice());
    }

    saveMovies() {
        this.movies.sort(this.stringSort);
        const uuidUser = firebase.auth().currentUser.uid;
        firebase.database().ref('/' + uuidUser + '/movies').set(this.movies);
    }

    createNewMovie(newMovie: Movie) {
        this.movies.push(newMovie);
        this.saveMovies();
        this.emitMovies();
    }

    removeMovie(movie: Movie) {
        if (movie.photo) {
            this.deletePhotoInStorage(movie.photo);
        }
        const movieIndexToRemove = this.getMovieIndex(movie);
        this.movies.splice(movieIndexToRemove, 1);
        this.saveMovies();
        this.emitMovies();
    }

    public deletePhotoInStorage(url: string) {
        if (url && url.length) {
            const storageRef = firebase.storage().refFromURL(url);
            storageRef.delete().then(() => {
                console.log('photo supprimée');
            }, (error) => {
                console.log('Erreur de suppression : ' + error);
            });
        }
    }

    editMovie(oldMovie: Movie, newMovie: Movie, index: number) {
        if (oldMovie.photo) {
            const oldUrl = oldMovie.photo;
            if (newMovie.photo) {
                const newUrl = newMovie.photo;
                if (oldUrl !== newUrl) {
                    this.deletePhotoInStorage(oldMovie.photo);
                }
            }
        }
        this.movies.splice(index, 1, newMovie);
        this.saveMovies();
        this.emitMovies();
    }

    private getMovieIndex(movie: Movie) {
        return this.movies.indexOf(movie);
    }

    getMovies() {
        let bool: boolean = true;
        while (bool) {
            if (!firebase.auth().currentUser == null) {
                bool = false;
            }
            setTimeout(() => {
                console.log("en attente du userInfo...");
            }, 2000);

        }
        const uuidUser = firebase.auth().currentUser.uid;
        firebase.database().ref('/' + uuidUser + '/movies')
            .on('value', (data: firebase.database.DataSnapshot) => {
                this.movies = data.val() ? data.val() : [];
                //this.movies.sort(this.stringSort);
                this.emitMovies();
            }
            );
    }

    getSingleMovies(id: number) {
        return new Promise(
            (resolve, reject) => {
                const uuidUser = firebase.auth().currentUser.uid;
                firebase.database().ref('/' + uuidUser + '/movies/' + id).once('value').then(
                    (data: firebase.database.DataSnapshot) => {
                        resolve(data.val());
                    }, (error) => {
                        console.log('erreur  movieService.getSingleMovies : ' + error);
                        reject(error);
                    }
                );
            }
        );
    }

    uploadFile(file: File) {
        return new Promise(
            (resolve, reject) => {
                const upload = firebase.storage().ref().child('images/' + file.name).put(file);
                upload.on(
                    firebase.storage.TaskEvent.STATE_CHANGED,
                    (a: Object) => {
                        console.log('Chargement...');
                    },
                    (error) => {
                        console.log('Erreur de chargement ! : ' + error);
                        reject;
                    },
                    () => {
                        firebase.storage().ref('images/' + file.name).getDownloadURL().then(
                            (url2: Object) => {
                                console.log('downLoadUrl : ' + url2.valueOf());
                                resolve(url2.valueOf());
                            }, (error) => {
                                console.log('erreur movieService.uploadFile : ' + error);
                                reject(error);
                            }
                        );
                    }
                );
            }
        );
    }

    private stringSort(a: Movie, b: Movie) {
        const titreA = a.title.toLowerCase();
        const titreB = b.title.toLowerCase();
        var i: number = 0;
        while ((i < a.title.length) && (i < titreB.length)) {
            if (titreA[i] < titreB[i]) {
                return -1;
            }
            else if (titreA[i] > titreB[i]) {
                return 1;
            }
            ++i;
        }
        if (titreA === titreB) {
            return 0;
        } else if (titreA === '') {
            return -1;
        }
        return 1;
    }

    searchMovie(filter: FiltreMovie) {
        var moviesResult: Movie[] = [];
        if (filter) {
            for (let movie of this.movies) {
                var titleIsOK: boolean = true;
                var realisateurIsOK: boolean = true;
                var scenaristeIsOK: boolean = true;
                var producteurIsOK: boolean = true;
                var acteurIsOK: boolean = true;
                var sortieIsOK: boolean = true;
                var categoriesIsOK: boolean = true;
                var isPretIsOK: boolean = true;
                var nameOfPretIsOK: boolean = true;
                var isTvShowIsOk: boolean = true;
                var saisonsIsOK: boolean = true;

                const title = filter.title;
                const realisateur = filter.realisateur;
                const scenariste = filter.scenariste;
                const producteur = filter.producteur;
                const acteur = filter.acteur;
                const sortie = filter.sortie;
                const categories = filter.categories;
                const isPret = filter.isPret;
                const nameOfPret = filter.nameOfPret;
                const isTVShow = filter.isTVShow;
                const saisons = filter.saisons;

                if (title) {
                    if (movie.title.toLowerCase().includes(title.toLowerCase())) {
                        titleIsOK = true;
                    } else {
                        titleIsOK = false;
                    }
                }
                if (realisateur && realisateur.length && titleIsOK) {
                    for (let real of realisateur) {
                        for (let movieReal of movie.realisateur) {
                            if (movieReal.toLowerCase().includes(real.toLowerCase())) {
                                realisateurIsOK = true;
                                break;
                            } else {
                                realisateurIsOK = false;
                            }
                        }
                    }
                }
                if (scenariste && scenariste.length && realisateurIsOK && titleIsOK) {
                    for (let scena of scenariste) {
                        for (let movieScena of movie.scenariste) {
                            if (movieScena.toLowerCase().includes(scena.toLowerCase())) {
                                scenaristeIsOK = true;
                                break;
                            } else {
                                scenaristeIsOK = false;
                            }
                        }
                    }
                }
                if (producteur && producteur.length && scenaristeIsOK && realisateurIsOK && titleIsOK) {
                    for (let prod of producteur) {
                        for (let movieProd of movie.producteur) {
                            if (movieProd.toLowerCase().includes(prod.toLowerCase())) {
                                producteurIsOK = true;
                                break;
                            } else {
                                producteurIsOK = false;
                            }
                        }
                    }
                }

                if (acteur && acteur.length &&producteurIsOK && scenaristeIsOK && realisateurIsOK && titleIsOK) {
                    for (let act of acteur) {
                        for (let movieAct of movie.acteur) {
                            if (movieAct.toLowerCase().includes(act.toLowerCase())) {
                                acteurIsOK = true;
                                break;
                            } else {
                                acteurIsOK = false;
                            }
                        }
                    }
                }

                if (categories && categories.length && acteurIsOK && producteurIsOK && scenaristeIsOK && realisateurIsOK && titleIsOK) {
                    for (let cat of categories) {
                        if (movie.categories && movie.categories.length) {
                            if (!movie.categories.includes(cat)) {
                                categoriesIsOK = false;
                                break;
                            }
                        } else {
                            categoriesIsOK = false;
                        }
                    }
                }

                if(sortie && categoriesIsOK && acteurIsOK && producteurIsOK && scenaristeIsOK && realisateurIsOK && titleIsOK){
                    if(sortie.getFullYear() == movie.sortie.getFullYear()){
                        sortieIsOK = true;
                    }else{
                        sortieIsOK = false;
                    }
                }

                if(isPret!=null && sortieIsOK && categoriesIsOK && acteurIsOK && producteurIsOK && scenaristeIsOK && realisateurIsOK && titleIsOK){
                    if(isPret == movie.isPret){
                        isPretIsOK = true;
                    }else{
                        isPretIsOK = false;
                    }
                }

                if(movie.isPret && isPretIsOK && sortieIsOK && categoriesIsOK && acteurIsOK && producteurIsOK && scenaristeIsOK && realisateurIsOK && titleIsOK){
                    if(movie.nameOfPret.toLowerCase().includes(nameOfPret.toLowerCase())){
                        nameOfPretIsOK = true;
                    }else{
                        nameOfPretIsOK = false;
                    }
                }

                if(isTVShow && movie.isTvShow && nameOfPretIsOK && isPretIsOK && sortieIsOK && categoriesIsOK && acteurIsOK && producteurIsOK && scenaristeIsOK && realisateurIsOK && titleIsOK){
                    isTvShowIsOk = true;
                }else{
                    isTvShowIsOk = false;
                }

                if(isTvShowIsOk && movie.isTvShow &&  nameOfPretIsOK && isPretIsOK && sortieIsOK && categoriesIsOK && acteurIsOK && producteurIsOK && scenaristeIsOK && realisateurIsOK && titleIsOK){
                    if(movie.Saisons.toLowerCase().includes(saisons.toLowerCase())){
                        saisonsIsOK = true;
                    }else{
                        saisonsIsOK = false;
                    }
                }

                if (saisonsIsOK && isTvShowIsOk && nameOfPretIsOK && isPretIsOK && sortieIsOK && categoriesIsOK && acteurIsOK && producteurIsOK && scenaristeIsOK && realisateurIsOK && titleIsOK) {
                    moviesResult.push(movie);
                }
            }
        } else {
            moviesResult = this.movies;
        }
        return moviesResult;

    }

    removeLocalMovies() {
        this.movies = [];
    }

}

}