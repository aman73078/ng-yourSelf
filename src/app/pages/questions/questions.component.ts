import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
@Component({
  selector: 'app-questions',
  imports: [ReactiveFormsModule, FormlyModule, FormlyBootstrapModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  fields:FormlyFieldConfig[] = [];
  form: FormGroup = new FormGroup({});
  model:any = {}
  ngOnInit(){
    this.fields = [
      {
        fieldGroupClassName:'row',
        fieldGroup:[
          {
            className:'col-6',
            key:'language',
            type:'select',
            templateOptions:{
              placeholder:'Select Language',
              options:[
                {label:'Angular',value:'angular'},
                {label:'Angular',value:'angular'},
                {label:'Angular',value:'angular'},
                {label:'Angular',value:'angular'},
                {label:'Angular',value:'angular'}
              ]
            }
          },
          {
            className:'col-6',
            key:'Topics',
            type:'select',
            templateOptions:{
              placeholder:'Select Topic',
              options:[
                {label:'Angular',value:'angular'},
                {label:'Angular',value:'angular'},
                {label:'Angular',value:'angular'},
                {label:'Angular',value:'angular'},
                {label:'Angular',value:'angular'}
              ]
            }
          }
        ]
      }
    ]
  }
}
