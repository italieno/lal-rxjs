import {Observable, Observer} from "rxjs";

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let source = Observable.create(observer => {
    
    let index = 0;
    
    let produceValue = () => {
        observer.next(numbers[index++]);

        if (index < numbers.length){
            setTimeout(produceValue, 1000)
        } 
        else{
            observer.complete();
        }
    }

    produceValue();
}).map(n => n * 2).filter(n => n > 4 && n < 12);

source.subscribe(
    val => {console.log(`value: ${val}`);},
    err => {console.log(`error: ${err}`);},
    () => {console.log(`finished`);}
);