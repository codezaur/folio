import { Component, OnInit } from '@angular/core';
import {SwitchService} from '../services/switch.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  value: string = 'okok';
  subscription: any;

  projects = {
    cash: [
      {name: 'Estate Deals Scraper',
      capt: 'script',
      desc: 'Script for real estate investor. Scraping major estate portals for ads, \
      filtering them for requested criteria and sending text message with \
      links to new deals when they appear.\
      Detail are confidential, so neither demo nor code is available.',
      tech: ['ion-logo-python'],
      pic: '../../assets/img/fake-python.jpg'
    },
      {name: 'Zakupowy Sknera',
      capt: 'set of browser extensions',
      desc: 'Side project making me pocket money. \
      Extensions for Chrome and Firefox, allowing users \
      to save money while shopping online. Made with JavaScript.',
      live: 'http://zakupowysknera.pl/',
      tech: ['ion-logo-css3', 'ion-logo-javascript'],
      pic: '../../assets/img/zakupowy-sknera.png'
    },
      {name: 'Real Estate Subdivision',
      capt: 'landing page',
      desc: 'PSD 2 HTML + pixel perfect (done in cooperation with other developer). \
      My parts were: attractions, example house, available houses sections, \
      and PHP backend for contact form.',
      live: 'http://osiedlewilanowka.pl/',
      tech: ['ion-logo-css3', 'ion-logo-javascript', 'ion-logo-sass'],
      pic: '../../assets/img/wilanowka.png'
    },
      {name: 'Help Center Website',
      capt: 'wordpress CMS theme',
      desc: 'Customisation of WP theme in line with provided graphical project.',
      live: 'https://help.reservis.pl/',
      tech: ['ion-logo-css3', 'ion-logo-wordpress'],
      //  tech: ['fas fa-css3-alt', 'fas fa-wordpress', 'fa fa-php', 'fa fa-wordpress'],
      pic: '../../assets/img/wpreservis.png'
      }
    ],

    fun: [
      {name: 'Phone Shop',
      capt: 'order page',
      desc: 'Order page for e-commerce phone shop, allowing to choose \
       various options, from which some update price. \
       Form is validated for proper email/empty fields and order object is \
       logged to console on submit. Backend is mocked as JSON.',
      live: 'https://schrodingerscode.net/PhoneShop/',
      tech: ['ion-logo-css3', 'ion-logo-javascript', 'ion-logo-sass'],
      pic: '../../assets/img/order-phone.png',
      code: 'https://github.com/codezaur/PhoneShopOrderPage'
     },
     {name: 'Travel Agency Website',
     capt: 'landing page',
     desc: 'PSD 2 HTML landing page with cool blur effect, simple validation \
      (displaing tooltip when number is entered into \'name\' field), \
      and some basic animation',
     live: 'https://schrodingerscode.net/turistLandingPage/',
     tech: ['ion-logo-css3', 'ion-logo-javascript', 'ion-logo-sass'],
     pic: '../../assets/img/landing-tourist.png',
     code: 'https://github.com/codezaur/turistLandingPage'
      },
      {name: 'Percentage Calculator',
      capt: 'simple JS app',
      desc: 'Percantage calculator (in polish) allowing \
      to make various percentage calculations, eg., \
      calculate number having given it\'s percentage.',
      live: 'https://schrodingerscode.net/KalkulatorProcentowy/',
      tech: ['ion-logo-css3', 'ion-logo-javascript'],
      pic: '../../assets/img/calc.png',
      code: 'https://github.com/codezaur/PercentageCalculator'
      },
      {name: 'Medical Product Website',
      capt: 'landing page',
      desc: 'Landing page with simple animations and transition effects.',
      live: 'https://schrodingerscode.net/display-users/',
      tech: ['ion-logo-css3', 'ion-logo-javascript', 'ion-logo-sass'],
      pic: '../../assets/img/landing-medic.png',
      code: 'https://github.com/codezaur/ProductLandingPage'
      },
      {name: 'Displaying Users App',
      capt: 'single page application',
      desc: 'Displaing users data from fake API \
      (jsonplaceholder). Done with react, axios and react-router.',
      live: 'https://schrodingerscode.net/display-users/',
      tech: ['ion-logo-javascript'],
      pic: '../../assets/img/display-users.png',
      code: 'https://github.com/codezaur/ReactDisplayUsersSPA'
      },
      {name: 'Glycemic Index Checker',
      capt: 'simple JS app',
      desc: 'Checks and displays glycemic index value \
      (how much glucose level increases \
      after consumption) of a given food.',
      live: 'https://schrodingerscode.net/GlycemicIndex/',
      tech: ['ion-logo-html5', 'ion-logo-javascript'],
      pic: '../../assets/img/glycemic-index.png',
      code: 'https://github.com/codezaur/GlycemicIndex'
      },
      {name: 'Random Speech Generator',
      capt: 'simple JS app',
      desc: 'My first JavaScript app. Generates random speech \
      of polish politician of your choice.\
      Text is generated mostly from mixture of his previous statements',
      live: 'https://schrodingerscode.net/GeneratorPrzemowien/',
      tech: ['ion-logo-html5', 'ion-logo-javascript'],
      pic: '../../assets/img/speech-generator.png',
      code: 'https://github.com/codezaur/GeneratorPrzemowien'
      }
    ]
  };

  selected = this.projects.cash;

  constructor(private switchService: SwitchService) {
    this.subscription = this.switchService.getValue()
    .subscribe(val => {
      val === 'fun' ? this.selected = this.projects.fun : this.selected = this.projects.cash;
    });
   }

  ngOnInit() {}
  OnDestroy() {
    this.subscription.unsubscribe();
 }

}

