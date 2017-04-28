import {Observable, Observer} from "rxjs";
import {load} from "./loader";

let output = document.getElementById("output");
let button = document.getElementById("btnGetMovies");
let click = Observable.fromEvent(button, 'click');

function renderMovies(movies){
    movies.forEach(m => {
        let div = document.createElement("div");
        div.innerText = m.title;
        output.appendChild(div);
    });
}

let subscription = load("data/movies.json")
                    .subscribe(
                        renderMovies,
                        err => { console.log(`error: ${err}`); },
                        () => { console.log(`finished`); }
                    );

//subscription.unsubscribe();                  

// click
//     .flatMap(e => load("data/movies.json"))
//     .subscribe(
//         renderMovies,
//         err => { console.log(`error: ${err}`); },
//         () => { console.log(`finished`); }
//     );