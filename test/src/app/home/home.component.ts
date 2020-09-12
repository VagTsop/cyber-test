import { Component, OnInit } from '@angular/core';
import instructions from '../../assets/config/instructions.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Cyberce Test';
  tips = instructions.main_screen.tips;

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {

  }

  beginTest() {
    this.router.navigate(['/login']);
  }
}
