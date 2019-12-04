import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
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
