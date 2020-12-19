import { Injectable } from '@angular/core';
import { Questions } from './mock-questions';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private score = 15;
  private currentImages = [[], []];
  private currentQuestion = '';
  private showModal = true;
  private correctAnswer = false;
  private interval = null;
  private timerDuration = 1000 * 60;
  private timerSequence = 100;
  private timerChunk = 100 / this.timerDuration * this.timerSequence;
  private timeLeftPercent = 0;

  public getTimeLeftPercent(): number {
    return this.timeLeftPercent;
  }

  public getShowModal(): boolean {
    return this.showModal;
  }

  public getCorrectAnswer(): boolean {
    return this.correctAnswer;
  }

  public getScore(): number {
    return this.score;
  }

  public getCurrentImages(): string[][] {
    return this.currentImages;
  }

  public startGame(): void {
    this.currentQuestion = '';
    this.score = 0;
    this.timeLeftPercent = 0;
    this.getRandomQuestions();

    this.interval = setInterval(() => {
      if (this.timeLeftPercent < 100) {
        this.timeLeftPercent += this.timerChunk;
      } else {
        clearInterval(this.interval);
        // TODO: end game logic
      }
    }, this.timerSequence);
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
