import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuestionComponent } from './question/question.component';
import { NotificationComponent } from './notification/notification.component';
import { ScoreComponent } from './score/score.component';
import { CardRowComponent } from './card-row/card-row.component';
import { CardComponent } from './card-row/card/card.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    QuestionComponent,
    NotificationComponent,
    ScoreComponent,
    CardRowComponent,
    CardComponent,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
  ],
})
export class AppModule { }
