import {Observable, Observer} from "rxjs";

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

////////////////////////////////////////////
//simple observer implementation with from 
////////////////////////////////////////////
let source1 = Observable.from(numbers);

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

source1.subscribe(new MyObserver());

////////////////////////////////////////////
//simple observer implementation with create
////////////////////////////////////////////

let source2 = Observable.create(observer => {
    
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
});

source2.subscribe(
    val => {console.log(`value: ${val}`);},
    err => {console.log(`error: ${err}`);},
    () => {console.log(`finished`);}
);