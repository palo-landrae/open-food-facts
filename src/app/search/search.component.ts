import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OpenfoodfactsService } from '../openfoodfacts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  query: string;
  title = 'first-routed-app';
  obsFoods: Observable<any>;
  results: any;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public openfoodfacts: OpenfoodfactsService) { }

  submit(query: HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsFoods = this.openfoodfacts.searchFood(this.query);
    this.obsFoods.subscribe((data) => {
      this.results = data;
      console.log(this.results);
    });
  }

  ngOnInit(): void { }
}
