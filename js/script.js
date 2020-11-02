" use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [1, 2, 3,],
    privat: false
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        let firstMovie = prompt('Один из последних просмотренных фильмов?', '');
        let firstScore = +prompt('На сколько оцените его?', '');

        if (firstMovie != null && firstScore && firstScore != '' && firstMovie != '' && firstMovie.length < 50) {
            personalMovieDB.movies[firstMovie] = firstScore;
            console.log('done');
        } else {
            console.log('error');
            i--; 
        }      
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 ) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 30 ) {
        alert('Вы киноман');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 )  {
        alert('Вы классический зритель');
    } else {
        alert('Произошла ошибка');
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();