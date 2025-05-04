import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFieldConfig, FormlyForm, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule,FormlyBootstrapModule,FormlyModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
  form:FormGroup = new FormGroup({});
  model:any = {};
  fields: FormlyFieldConfig[] = [];

  ngOnInit(){
    this.getContactFields();
  }

  getContactFields(){
    this.fields = [
      { fieldGroupClassName:'row',
        fieldGroup:[
          {
            className:'col-6',
            key:'firstName',
            type:'input',
            props:{
              label:"First Name",
              
            }
          },
          {
            className:'col-6',
            key:'lastName',
            type:'input',
            props:{
              label:'Last Name',
            }
          },
          {
            className:'col-12',
            key:'email',
            type:'input',
            props:{
              label:'Email',
              required:true,
            }
          },
          {
            className:'col-12',
            key:'message',
            type:'textarea',
            props:{
              label:'',
              placeholder:'Write your message...',
              rows:3,
              // required:true,
            }
          }
        ]
      }
    ]
  }

  submit(){
    if(this.form.valid){
      console.log('this.model',this.model);
      
    }
  }
}
