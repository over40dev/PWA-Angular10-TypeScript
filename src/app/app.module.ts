import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// c14-02 (import FaIconLirary)
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// c14-03 (import Icon we want to use in our app FaIconLirary)
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
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
  imports: [
    BrowserModule,
  ]
})
export class AppModule {
  // c14-04 (setup constructor to inject FA Icon Library to get access to our chosen icons)
  constructor(library: FaIconLibrary) {
    library.addIcons(faTrophy);
  }
}
