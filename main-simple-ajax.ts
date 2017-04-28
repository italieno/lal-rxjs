import {Observable, Observer} from "rxjs";

let output = document.getElementById("output");
let button = document.getElementById("btnGetMovies");

let source = Observable.fromEvent(button, 'click');

function loadMovies(url){
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
        let movies = JSON.parse(xhr.responseText);
        movies.forEach(m => {
            let div = document.createElement("div");
            div.innerText = m.title;
            output.appendChild(div);
        });
    });

    xhr.open("GET", url);
    
    xhr.send();
}

source.subscribe(
    e => { loadMovies("data/movies.json"); },
    err => { console.log(`error: ${err}`); },
    () => { console.log(`finished`); }
);