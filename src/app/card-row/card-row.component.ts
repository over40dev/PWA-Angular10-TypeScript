import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: '<app-card-row></app-card-row>',
  templateUrl: './card-row.component.html',
  styleUrls: [
    './card-row.component.scss',
  ]
})
export class CardRowComponent {
  constructor(public gameService: GameService) {}
}
