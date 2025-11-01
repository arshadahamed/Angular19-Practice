import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { EMPTY, Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class CustomPreLoadingStrategy implements PreloadingStrategy {
  preload(route: Route, fn:()=> Observable<any>):
  Observable<any>{
    if(route.data?.['preLoad']){
      console.log('Preloading route:', route);
      return fn();
    }
    console.log('Not preloading route:', route);
    return EMPTY;
  }
}
