import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { QuestionBase } from "../question-base";
import { QuestionControlService } from "../question-control.services";
@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [ QuestionControlService ]
  })
export class DynamicFormComponent implements OnInit {
    
  @Input() questions: QuestionBase<string>[] = [];
  dynamicForm: FormGroup;
  payLoad = '';
    constructor(private qcs: QuestionControlService) {

    }
    ngOnInit() {
        this.dynamicForm = this.qcs.toFormGroup(this.questions);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.dynamicForm.getRawValue());
    }
}