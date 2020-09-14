import { Component, OnInit } from '@angular/core';
import instructions from '../../assets/config/instructions.js';
import { BooksService } from './books.service.js';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [BooksService],
})
export class ListComponent implements OnInit {

  booksList: string [] ;
  instructions = instructions.list;


  constructor( private route: ActivatedRoute,
               private booksService: BooksService) { }

    ngOnInit() {
      this.booksService.getJSON().subscribe(data => {
        this.booksList = data.books;
      //  console.log(this.booksList[0])
       });
    }
}
