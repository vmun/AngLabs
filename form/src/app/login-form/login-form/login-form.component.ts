import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  name = new FormControl('');
  password = new FormControl('');
  date = new FormControl('');
  date2;
  day;
  year;
  month;

  constructor() {
  }

  ngOnInit() {
  }

  time() {
    // @ts-ignore
    this.date2 = JSON.parse(this.date);
    this.day = this.date2[0];
  }
}
