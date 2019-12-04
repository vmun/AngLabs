import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  name = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  date = new FormControl('', Validators.required);
  fg = new FormGroup({
    name: this.name, password: this.password, date: this.date
  });
  date2;
  day;
  year;
  month;
  //
  // constructor(private service: AuthService) {
  // }

  myForm: FormGroup;
  formattedMessage: string;

  constructor(private formBuilder: FormBuilder) {
  }

  onChanges(): void {
    this.myForm.valueChanges.subscribe(val => {
      this.formattedMessage =
        `Hello,

    My name is ${val.name} and my email is ${val.email}.

    I would like to tell you that ${val.password}.`;
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.myForm.value);
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });

    this.onChanges();
    {
    }
  }

  // ngOnInit() {
  //   this.service.subjectObs.subscribe(d => {
  //     console.log(d);
  //   })
  //
  //   this.service.behSubjectObs.subscribe(d => {
  //     console.log(d)
  //   })
  //   this.service.setForm('lol');
  // }

  time() {
    // @ts-ignore
    this.date2 = JSON.parse(this.date);
    this.day = this.date2[0];
  }
}
