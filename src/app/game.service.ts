import { Injectable } from '@angular/core';
import { Questions } from './mock-questions';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private score = 15;
  private currentImages = [[], []];
  private currentQuestion = '';

  public getScore(): number {
    return this.score;
  }

  public getCurrentImages(): string[][] {
    return this.currentImages;
  }

  public startGame(): void {
    this.currentQuestion = '';
    this.score = 0;
    this.getRandomQuestions();
    console.log('start');
  }

  public getCurrentQuestion(): string {
    return this.currentQuestion;
  }

  private getRandomQuestions(): void {
    // randomize Questions
    Questions.sort(() => 0.5 - Math.random());
    // get first four images
    const randomImages = Questions.slice(0, 4);
    // pick currentQuestion from randomImages
    this.currentQuestion = randomImages[Math.floor(Math.random() * randomImages.length)];
    // update images to be shown in game
    this.currentImages = [
      [randomImages[0], randomImages[1]],
      [randomImages[2], randomImages[3]]
    ];
  }
}
