import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  showMeTheMoney: boolean = true;

  projects = {
    cash: [
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
    ],

    fun: [
      {name: 'Order Page for Phone Shop',
       desc: 'Order page for e-commerce phone shop, allowing to choose \
       various options, from which some update price. \
       Form is validated for proper email/empty fields and order object is \
       logged to console on submit. Backend is mocked as JSON.',
      live: 'https://schrodingerscode.net/PhoneShop/',
      tech: ['ion-logo-css3', 'ion-logo-javascript', 'ion-logo-sass'],
      pic: '../../assets/img/order-phone.png',
      code: 'https://github.com/codezaur/PhoneShopOrderPage'
     },
     {name: 'Landing Page for Travel Agency',
      desc: 'psd2html landing page with cool blur effect, simple validation \
      (displaing tooltip when number is entered into \'name\' field), \
      and some basic animation',
      live: 'https://schrodingerscode.net/turistLandingPage/',
      tech: ['ion-logo-css3', 'ion-logo-javascript', 'ion-logo-sass'],
      pic: '../../assets/img/order-phone.png',
      code: 'https://github.com/codezaur/turistLandingPage'
      }
    ]
  };

  selected = this.projects.cash;

  ngOnInit() {
  }

}
