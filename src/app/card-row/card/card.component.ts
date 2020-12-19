import { Component, Input } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-row-card',
  templateUrl: 'card.component.html',
  styleUrls: [
    'card.component.scss',
  ]
})
export class CardComponent {
  constructor(private gameService: GameService) {}

  @Input() imageUrl: string;
  @Input() imageName: string;

  public cardClick(): void {
    this.gameService.checkAnswer(this.imageName);
  }
}
