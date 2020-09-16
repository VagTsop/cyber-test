import { Component, OnInit } from "@angular/core";
import instructions from "../../assets/config/instructions.js";
import { BooksService } from "./books.service.js";
import { ActivatedRoute } from "@angular/router";
import { NgbdModalComponent } from "../shared/modal-component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormModalComponent } from "../form-modal/form-modal.component.js";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [BooksService, NgbdModalComponent],
})
export class ListComponent implements OnInit {
  booksList: any;
  instructions = instructions.list;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private modalComponent: NgbdModalComponent,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.booksService.getJSON().subscribe((data) => {
      this.booksList = data.books;
    });
  }

  onClick() {
    this.modalComponent.open();
  }

  openFormModal() {
    const modalRef = this.modalService.open(FormModalComponent);

    modalRef.result
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
