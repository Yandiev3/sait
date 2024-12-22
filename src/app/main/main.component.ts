import { ChangeDetectorRef, Component } from '@angular/core';

import { CardsService } from '../services/cards.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  
})
export class MainComponent {
  cards: any;
  private _cardsService: CardsService;

  

  constructor(cardsService: CardsService)
  {
    this._cardsService = cardsService;
    this.cards = this._cardsService.getCard().slice(0, 3);
    console.log(this.cards);
    
}
}
