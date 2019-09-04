import { Component, OnInit } from '@angular/core';
import {SwitchService} from '../services/switch.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  providers: [SwitchService]
})
export class DisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
