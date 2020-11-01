" use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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



if (personalMovieDB.count < 10 ) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 30 ) {
    alert('Вы киноман');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 )  {
    alert('Вы классический зритель');
} else {
    alert('Произошла ошибка');
}

/*for (let i = 0; i < 2; i++) {
    let secondMovie = prompt('Один из последних просмотренных фильмов?', '');
    let secondScore = +prompt('На сколько оцените его?', '');

    personalMovieDB.movies[secondMovie] = secondScore;
}
*/