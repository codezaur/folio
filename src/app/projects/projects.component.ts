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
      {name: 'Zakupowy Sknera - set of browser extensions',
      desc: 'Side project making me pocket money. \
      Extensions for Chrome and Firefox, allowing users \
      to save money while shopping online. Made with JavaScript.',
      live: 'http://zakupowysknera.pl/',
      tech: ['ion-logo-css3', 'ion-logo-javascript'],
      pic: '../../assets/img/zakupowy-sknera.png'
    },
      {name: 'Landing Page for Real Estate Developer',
      desc: 'Done in cooperation with other developer. PSD 2 HTML + pixel perfect. \
      My parts were: attractions, example house, available houses sections, \
      and backend for contact form.',
      live: 'http://osiedlewilanowka.pl/',
      tech: ['ion-logo-css3', 'ion-logo-javascript', 'ion-logo-sass'],
      pic: '../../assets/img/wilanowka.png'
    },
      {name: 'Help Center in Wordpress',
       desc: 'Customisation of WP theme in line with provided graphical project.',
       live: 'https://help.reservis.pl/',
       tech: ['ion-logo-css3', 'ion-logo-wordpress'],
      //  tech: ['fas fa-css3-alt', 'fas fa-wordpress', 'fa fa-php', 'fa fa-wordpress'],
       pic: '../../assets/img/wpreservis.png'
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
      desc: 'Psd2html landing page with cool blur effect, simple validation \
      (displaing tooltip when number is entered into \'name\' field), \
      and some basic animation',
      live: 'https://schrodingerscode.net/turistLandingPage/',
      tech: ['ion-logo-css3', 'ion-logo-javascript', 'ion-logo-sass'],
      pic: '../../assets/img/landing-tourist.png',
      code: 'https://github.com/codezaur/turistLandingPage'
      },
      {name: 'Percentage Calculator',
      desc: 'Percantage calculator (in polish) allowing \
      to make various percentage calculations, eg., \
      calculate number having given it\'s percentage.',
      live: 'https://schrodingerscode.net/KalkulatorProcentowy/',
      tech: ['ion-logo-css3', 'ion-logo-javascript'],
      pic: '../../assets/img/calc.png',
      code: 'https://github.com/codezaur/PercentageCalculator'
      },
      {name: 'Landing Page for Medical Product',
      desc: 'Landing page with simple animations and transition effects.',
      live: 'https://schrodingerscode.net/display-users/',
      tech: ['ion-logo-css3', 'ion-logo-javascript', 'ion-logo-sass'],
      pic: '../../assets/img/landing-medic.png',
      code: 'https://github.com/codezaur/ProductLandingPage'
      },
      {name: 'Displaying users from fake API',
      desc: 'Single Page App displaing data (users data in this case) \
      from server (fake API jsonplaceholder in this case). \
      Done with react, axios and react-router.',
      live: 'https://schrodingerscode.net/display-users/',
      tech: ['ion-logo-javascript'],
      pic: '../../assets/img/display-users.png',
      code: 'https://github.com/codezaur/ReactDisplayUsersSPA'
      },
      {name: 'Glycemic Index Checker',
      desc: 'Checks and displays glycemic index value \
      (how much glucose level increases \
      after consumption) of a given food.',
      live: 'https://schrodingerscode.net/GlycemicIndex/',
      tech: ['ion-logo-html5', 'ion-logo-javascript'],
      pic: '../../assets/img/glycemic-index.png',
      code: 'https://github.com/codezaur/GlycemicIndex'
      },
      {name: 'Random Speech Generator',
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

  selected = this.projects.fun;

  ngOnInit() {
  }

}
