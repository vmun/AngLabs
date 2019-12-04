import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line:variable-name
  private _subject = new Subject();
  public subjectObs = this._subject.asObservable();

  private _behSubject = new BehaviorSubject('lol2');
  public behSubjectObs = this._behSubject.asObservable();

  constructor() {
    this._behSubject.value;
  }

  setForm(model: any) {
    console.log('Here')
    this._subject.next(model);
  }
}
