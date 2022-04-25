import { Injectable } from '@angular/core';
import { HttpClient }  from'@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class Servizio01Service {
  dato:string;

  constructor( private httclient : HttpClient){}

  httpGet(url:string){
    return this.httclient.get<any>(url)  // restituisce un Observable
  }
}


