import {Observable} from "rxjs";

let numbers = [1, 2, 3];
let source = Observable.from(numbers);


class MyObserver{
    
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