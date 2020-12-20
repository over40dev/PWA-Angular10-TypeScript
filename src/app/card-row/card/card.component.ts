import { Component, Input } from '@angular/core';
import { GameService } from '../../game.service';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-row-card',
  templateUrl: 'card.component.html',
  styleUrls: [
    'card.component.scss',
  ]
})
export class CardComponent {
  constructor(
    private gameService: GameService,
    private messageService: MessageService,
  ) {
    this.messageService.getMessasge().subscribe((message) => {
      console.log(message);
    });
  }

  @Input() imageUrl: string;
  @Input() imageName: string;

  public cardClick(): void {
    this.gameService.checkAnswer(this.imageName);
  }
}
