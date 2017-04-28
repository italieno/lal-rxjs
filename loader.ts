import {Observable} from "rxjs";

export function load(url:string){
    return Observable.create(observer => {
        let xhr = new XMLHttpRequest();

        let onload = () => {
            if (xhr.status === 200){
                let data = JSON.parse(xhr.responseText);
                observer.next(data);
                observer.complete();
            }
            else{
                observer.error(xhr.statusText);
            }
        };

        xhr.addEventListener("load", onload);

        xhr.open("GET", url);
        
        xhr.send();

        return () => {
            xhr.removeEventListener("load", onload);
            xhr.abort();
            console.log('cleanup');
        }
    })
    .retryWhen(retryStrategy({ attempts: 3, delay: 1000 }));
}

function retryStrategy({ attempts = 4, delay = 500 }){ //default constructor
    return function(errors){
        return errors
            .scan((acc, val) => {
                console.log(acc, val);
                return ++acc;
            }, 0)
            .takeWhile(acc => acc < attempts)
            .delay(delay);
    }
}