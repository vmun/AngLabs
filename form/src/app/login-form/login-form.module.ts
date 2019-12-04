import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './login-form/login-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbDatepicker, NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {Form2Component} from './form2/form2.component';

@NgModule({
  declarations: [LoginFormComponent, Form2Component],
  exports: [
    LoginFormComponent, Form2Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbDatepickerModule,

  ]
})
export class LoginFormModule {
}
