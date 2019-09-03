import { Injectable } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';

@Injectable({providedIn: 'root'})
export class SwitchProjectsService {
  // constructor(private projects: ProjectsComponent) {}
  constructor() {}
  switching(val) {
    console.log('inside service....');
    console.log(val);
    // if ( this.projects.selected === this.projects.projects.cash ) {
    //   this.projects.selected = this.projects.projects.fun;
    // } else {
    //   this.projects.selected = this.projects.projects.cash;
    // }

  }

}
