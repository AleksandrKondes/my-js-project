" use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let firstMovie = prompt('Один из последних просмотренных фильмов?', '');
let firstScore = +prompt('На сколько оцените его?', '');

let secondMovie = prompt('Один из последних просмотренных фильмов?', '');
let secondScore = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[firstMovie] = firstScore;
personalMovieDB.movies[secondMovie] = secondScore;

