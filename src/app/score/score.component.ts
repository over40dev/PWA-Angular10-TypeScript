import { Component } from '@angular/core';

@Component({
  selector: '<app-score></app-score>',
  templateUrl: './score.component.html',
  styleUrls: [
    './score.component.scss',
  ]
})
export class ScoreComponent {
  score = 10;
}