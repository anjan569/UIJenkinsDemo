import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './components/dynamicForm/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/dynamicFormQuestions/dynamic-form-question.component';
import { QuestionService } from './questions.services';
import { QuestionControlService } from './components/question-control.services';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [QuestionService, QuestionControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
