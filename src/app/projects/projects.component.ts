import { Component, OnInit } from '@angular/core';
import {SwitchService} from '../services/switch.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  // value: string = 'okok';
  subscription: any;

  projects = {
    cash: [
      {name: 'Estate Deals Scraper',
      capt: 'script',
      desc: 'Script for real estate investor. Scraping major estate portals for ads, \
      filtering them for requested criteria and sending text message with \
      links to new deals when they appear.\
      Details are confidential, so neither demo nor code is available.',
      // tech: ['ion-logo-python'],
      // tech: ['../../assets/logos/link.png'],
      tech: ['python.png', 'selenium.png'],
      pic: '../../assets/img/fake-python.jpg'
    },
      {name: 'Zakupowy Sknera',
      capt: 'set of browser extensions',
      desc: 'Side project making me pocket money. \
      Few extensions for Chrome and Firefox, allowing users \
      to save money while shopping online (eg. when buying books). \
      Made with JavaScript. Publicly available, so feel free to install and test.',
      live: 'http://zakupowysknera.pl/',
      tech: ['css.png', 'js.png', 'chrome.png', 'firefox.png'],
      pic: '../../assets/img/zakupowy-sknera.png'
    },
      {name: 'Real Estate Subdivision',
      capt: 'landing page',
      desc: 'PSD 2 HTML + pixel perfect (done in cooperation with other developer). \
      My parts were: attractions, example house, available houses sections, \
      and PHP backend for contact form.',
      live: 'http://osiedlewilanowka.pl/',
      tech: ['css.png', 'js.png', 'sass.png'],
      pic: '../../assets/img/wilanowka.png'
    },
      {name: 'Help Center Website',
      capt: 'wordpress CMS theme',
      desc: 'Help center with information for users of online reservation system.\
      Customisation of WordPress (child) theme in line with provided graphical project. \
      Toggleable menu and integration with printing plugin.',
      live: 'https://help.reservis.pl/',
      tech: ['css.png', 'js.png', 'php.png'],
      pic: '../../assets/img/wpreservis.png'
      }
    ],

    fun: [
      {name: 'Phone Shop',
      capt: 'order page',
      desc: 'Order page for e-commerce phone shop, allowing to choose \
       various options, from which some update price. \
       Form is validated for proper email/empty fields and order object is \
       logged to console on submit. Backend mocked as JSON.',
      live: 'https://schrodingerscode.net/PhoneShop/',
      tech: ['css.png', 'js.png', 'sass.png'],
      pic: '../../assets/img/order-phone.png',
      code: 'https://github.com/codezaur/PhoneShopOrderPage'
     },
     {name: 'Travel Agency Website',
     capt: 'landing page',
     desc: 'PSD 2 HTML landing page with cool blur effect, simple validation \
      (displaing tooltip when number is entered into \'name\' field), \
      and some basic animation.',
     live: 'https://schrodingerscode.net/turistLandingPage/',
     tech: ['css.png', 'js.png', 'sass.png'],
     pic: '../../assets/img/landing-tourist.png',
     code: 'https://github.com/codezaur/turistLandingPage'
      },
      {name: 'Percentage Calculator',
      capt: 'simple JS app',
      desc: 'Percantage calculator (in polish) allowing to make basic \
      percentage calculations, eg. calculate number having given it\'s percentage, \
      or what percentage of number X is number Y.',
      live: 'https://schrodingerscode.net/KalkulatorProcentowy/',
      tech: ['css.png', 'js.png'],
      pic: '../../assets/img/calc.png',
      code: 'https://github.com/codezaur/PercentageCalculator'
      },
      {name: 'Medical Product Website',
      capt: 'landing page',
      desc: 'Landing page with action buttons, features list, products comparison, customer testimonials, \
      FAQ, pricing table and contact form.\
      Used simple animations and transition effects.',
      live: 'https://schrodingerscode.net/LandingPage/',
      tech: ['css.png', 'js.png', 'sass.png'],
      pic: '../../assets/img/landing-medic.png',
      code: 'https://github.com/codezaur/ProductLandingPage'
      },
      {name: 'Displaying Users App',
      capt: 'single page application',
      desc: 'Displaing users data from fake API \
      (jsonplaceholder). Done with react, axios and react-router.\
      Serving all CRUD actions and logging server response to console',
      live: 'https://schrodingerscode.net/display-users/',
      tech: ['react.png'],
      pic: '../../assets/img/display-users.png',
      code: 'https://github.com/codezaur/ReactDisplayUsersSPA'
      },
      {name: 'Glycemic Index Checker',
      capt: 'simple JS app',
      desc: 'Checks and displays glycemic index value \
      (how much glucose level increases after consumption) of a given food. \
      Data is stored in JSON object and retrieved via XMLHttpRequest.',
      live: 'https://schrodingerscode.net/GlycemicIndex/',
      tech: ['html.png', 'js.png'],
      pic: '../../assets/img/glycemic-index.png',
      code: 'https://github.com/codezaur/GlycemicIndex'
      },
      {name: 'Random Speech Generator',
      capt: 'simple JS app',
      desc: 'My first JavaScript application. Generates random speech \
      of polish politician of your choice.\
      Text is generated mostly from mixture of his previous statements stored in JSON object.',
      live: 'https://schrodingerscode.net/GeneratorPrzemowien/',
      tech: ['html.png', 'js.png'],
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

