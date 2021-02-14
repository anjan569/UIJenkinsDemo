import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { QuestionBase } from "../question-base";

@Component({
    selector: 'app-question',
    templateUrl: './dynamic-form-question.component.html'
})

export class DynamicFormQuestionComponent {
    @Input() question: QuestionBase<string>;
    @Input() dynamicForm: FormGroup;
    get isValid() { return this.dynamicForm.controls[this.question.key].valid; }
}