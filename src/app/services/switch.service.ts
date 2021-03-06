import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SwitchService {
  constructor() {}

  private value = new Subject<string>();

  getValue(): Observable<string> {
    return this.value.asObservable();
  }

  updValue(val: string) {
    this.value.next(val);
  }
}

