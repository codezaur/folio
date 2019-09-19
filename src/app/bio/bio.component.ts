import { Component, OnInit } from '@angular/core';
import {SwitchService} from '../services/switch.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  constructor(private switchService: SwitchService) { }

  currentVisible: boolean = false;
  prevVisible: boolean = false;
  stackVisible: boolean = false;
  showMe = 'money';

  jobs = {
    current: {
      title: 'Frontend (fullstack) Dev at xxx',
      from: '01.2019',
      frontTech: ['Javascript/Typescript', 'Angular', 'Ionic',
                  'Karma + Jasmine'],
      frontTask: [
        'building whole frontend layer of mobile apps single-handedly',
        'communication with rest API',
        'full-fledged participating in planning app architecture and data flow'],
      backTech: ['Python'],
      backTask: ['web-scrapping']
    },
    prev: {
      title: 'Tester at Selidor',
      from: '02.2018',
      tech: ['Selenium WebDriver', 'Java'],
      task: ['test automation', 'manual testing',
            'managing weekly deployment process',
            'communication with business and developers']
    },
    prev01: {
      title: 'Tester at Unified Factory',
      from: '01.2017',
      task: ['manual testing']
    }
  };

  stack = ['Javascript', 'TypeScript', 'rest API', 'CSS', 'SCSS', 'BEM',
          'HTML', 'Angular', 'React', 'Python', 'Selenium WebDriver',
          'Docker', 'WordPress', 'PHP'];

  switch() {
    this.showMe === 'money' ? this.showMe = 'fun' : this.showMe = 'money';
    this.switchService.updValue(this.showMe);
  }

  showCurrent() {
    this.currentVisible ? this.currentVisible = false : this.currentVisible = true;
  }

  showPrev() {
    this.prevVisible ? this.prevVisible = false : this.prevVisible = true;
  }

  showStack() {
    this.stackVisible ? this.stackVisible = false : this.stackVisible = true;
  }

  ngOnInit() {
  }

}
