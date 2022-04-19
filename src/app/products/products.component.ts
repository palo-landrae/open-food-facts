import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { OpenfoodfactsService } from '../openfoodfacts.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  //Osserva gli eventi sulla route tracks, restituisce la ParamMap che contiene tutti i
  //parametri passati all’url
  obsRoute: Observable<ParamMap>;
  obsFoods: Observable<any>;

  product: any; //Qui salverò la traccia selezionata

  //Usiamo la dependency injection per farci mandare i moduli del routing e dello
  //SpotifyService
  constructor(
    private route: ActivatedRoute,
    private openfoodfacts: OpenfoodfactsService,
    private location: Location
  ) { }

  getRouterParam = (params: ParamMap) => {
    let productId = params.get('id'); //Ottengo l'id dai parametri
    //spotifyServiceObs va dichiarato
    this.obsFoods = this.openfoodfacts.getFood(productId);
    this.obsFoods.subscribe((data) => {
      console.log(data);
      this.product = data;
    });
  };

  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.obsRoute = this.route.paramMap;
    this.obsRoute.subscribe(this.getRouterParam);
  }

  back(): void {
    this.location.back();
  }
}
