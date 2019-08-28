import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  constructor() { }

  currentVisible: boolean = false;

  jobs = {
    current: {
      title: 'Frontend (fullstack) Developer at xxx',
      from: '01.2019',
      frontTech: ['Javascript/Typescript', 'Angular', 'Ionic'],
      frontTask: [
        'building whole frontend layer of mobile apps single-handedly',
        'communication with rest API',
        'full-fledged participating in planning app architecture and data flow'],
      backTech: ['Python'],
      backTask: ['web-scrapping']
    }
  };

  showCurrent() {
    this.currentVisible ? this.currentVisible = false : this.currentVisible = true;
  }

  ngOnInit() {
  }

}
