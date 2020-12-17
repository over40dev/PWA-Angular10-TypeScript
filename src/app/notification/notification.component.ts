import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
selector : 'app-notification',
templateUrl : 'notification.component.html',
  styleUrls: [
    'notification.component.scss',
  ]
})
export class NotificationComponent {
  constructor(public gameService: GameService) {}
}
