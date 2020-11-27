import { Component, Input } from '@angular/core';

@Component({
  selector: '<app-row-card></app-row-card>',
  templateUrl: './card.component.html',
  styleUrls: [
    './card.component.scss',
  ]
})
export class CardComponent {
  @Input() imageUrl: string;
  @Input() imageName: string;
}
