import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: '<app-root></app-root>',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
  ]
})
export class AppComponent implements OnInit {
  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameService.startGame();
    console.log(this.gameService.getCurrentImages());
  }
}
