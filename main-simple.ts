import {Observable, Observer} from "rxjs";

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let source = Observable.from(numbers);

class MyObserver implements Observer<number>{
    
    next(val){
        console.log(`value: ${val}`);
    }

    error(err){
        console.log(`error: ${err}`);
    }

    complete(){
        console.log(`finished`);
    }
}

source.subscribe(new MyObserver());
