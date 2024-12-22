import { Component } from '@angular/core';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-works',
  imports: [],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})


export class WorksComponent {
   cards: any;
   private _cardsService: CardsService;
 
   
 
   constructor(cardsService: CardsService)
   {
     this._cardsService = cardsService;
     this.cards = this._cardsService.getCard();
     console.log(this.cards);
     
 }
}
