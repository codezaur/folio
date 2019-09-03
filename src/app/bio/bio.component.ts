import { Component, OnInit } from '@angular/core';
import {SwitchProjectsService} from '../services/switchProjects.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
  providers: [SwitchProjectsService]
})
export class BioComponent implements OnInit {

  constructor(private switchProjectsService: SwitchProjectsService) { }

  currentVisible: boolean = false;
  prevVisible: boolean = false;

  jobs = {
    current: {
      title: 'Frontend (fullstack) Developer at xxx',
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

  switchMoney(val: string) {
    console.log('swithcing in bio.component now...');
    console.log(val);
    this.switchProjectsService.switching(val);
  }

  showCurrent() {
    this.currentVisible ? this.currentVisible = false : this.currentVisible = true;
  }

  showPrev() {
    this.prevVisible ? this.prevVisible = false : this.prevVisible = true;
  }

  ngOnInit() {
  }

}
