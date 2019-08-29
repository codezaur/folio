import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  cash = [
    {name: 'Help Center in Wordpress',
     desc: 'customisation of WP theme in line with provided graphical project',
     live: 'https://help.reservis.pl/',
     tech: ['ion-logo-css3', 'ion-logo-wordpress'],
     pic: '../../assets/img/wpreservis.png'
    },
    {name: 'Landing Page for Real Estate Developer',
     desc: 'Done in cooperation with other developer. PSD 2 HTML + pixel perfect. \
     My parts were: attractions, example house, available houses sections, \
     and backend for contact form.',
    live: 'http://osiedlewilanowka.pl/',
    tech: ['ion-logo-css3', 'ion-logo-javascript', 'ion-logo-sass'],
    pic: '../../assets/img/wilanowka.png'
   }
  ];

  ngOnInit() {
  }

}
