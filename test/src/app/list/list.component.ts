import { Component, OnInit } from '@angular/core';
import instructions from '../../assets/config/instructions.js';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  instructions = instructions.list;
  constructor() { }

  ngOnInit() {
  }

}
