import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Servizio01Service } from '../servizio01.service';

@Component({
  selector: 'app-weather-a',
  templateUrl: './weather-a.component.html',
  styleUrls: ['./weather-a.component.css']
})
export class WeatherAComponent implements OnInit, OnDestroy {
  DatiAria: any; 
  subscription: Subcribtion;
  apiEndpoint=environment.apiEndpoint
  
  constructor(private nonserv01 : Servizio01Service) { }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe() 
      console.log("oggetto WeatherWidgetMainComponent distrutto ")
    } 
  }

  ngOnInit(): void {
    this.DatiAria={ qualcosa : {} }
    this.getDatiAria()

  }
  getDatiAria() {
    let observable=this.nonserv01.httpGet(this.apiEndpoint)
    this.subscription=observable.subscribe( httpResponse => { console.log(httpResponse); this.setDatiAria(httpResponse) })
  }
  

  setDatiAria(dati : any) {
    this.DatiAria = dati;

    let data = this.DatiAria[0].data
    this.DatiAria.data = data;

    let descri = this.DatiAria[0].descri
    this.DatiAria.descri = descri;

    let previ = this.DatiAria[0].previ
    this.DatiAria.previ = previ;

    let tende = this.DatiAria[0].tende
    this.DatiAria.tende = tende;
  }

}
