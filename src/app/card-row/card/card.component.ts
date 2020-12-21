import { Component, Input, OnDestroy } from '@angular/core';
import { GameService } from '../../game.service';
import { MessageService } from '../../message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-row-card',
  templateUrl: 'card.component.html',
  styleUrls: [
    'card.component.scss',
  ]
})
export class CardComponent implements OnDestroy {
  constructor(
    private gameService: GameService,
    private messageService: MessageService,
  ) {
    this.subscription = this.messageService.getMessasge().subscribe((message) => {
      if (message.text === 'CardClicked') {
        if (gameService.getCurrentQuestion() !== this.imageName) {
          this.classes = 'fadedCard';
        }
      }
    });
  }

  @Input() imageUrl: string;
  @Input() imageName: string;
  subscription: Subscription;
  classes = '';

  public cardClick(): void {
    this.gameService.checkAnswer(this.imageName);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
