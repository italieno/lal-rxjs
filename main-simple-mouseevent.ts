import {Observable, Observer} from "rxjs";

let circle = document.getElementById('mycircle');

let source = Observable
                .fromEvent(document, 'mousemove')
                .map((e:MouseEvent) => {
                    return {
                        x: e.clientX,
                        y: e.clientY
                    }
                })
                .filter(val => val.x < 500)
                .delay(500);

function onNext(val){
    circle.style.left = val.x;
    circle.style.top = val.y;
}

source.subscribe(
    onNext,
    err => {console.log(`error: ${err}`);},
    () => {console.log(`finished`);}
);