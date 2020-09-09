import { Component, OnInit } from '@angular/core';
import instructions from '../../assets/config/instructions.js';
import { User } from '../models/user.js';
import { UserService } from '../services/user.service.js';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  loading = false;
  users: User[];
  instructions = instructions.list;
  
  constructor(private userService: UserService) { }


  
 

  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
        this.loading = false;
        this.users = users;
      });
  }
}
