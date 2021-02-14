import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './components/question-base';
import { QuestionService } from './questions.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UIJenkinsDemo1';
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
