import { Component, OnInit } from "@angular/core";
import instructions from "../../assets/config/instructions.js";
import { BooksService } from "./books.service.js";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoEmptyInputValidator } from '../custom-validators/no-empty-input-validator.js';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [BooksService],
  animations: [
  trigger('fadeSlideInOut', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(10px)' }),
      animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
    transition(':leave', [
      animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
     ]),
   ]),
  ]})

export class ListComponent implements OnInit {
  instructions = instructions.list;
  public bookPopupForm: FormGroup;
  public isShown: boolean = false ;
  
  public code: number;
  public title: string;
  public author: string;
  public published: string;
  public pages: number;
  public website: string;
  public booksList: Array<{code: number, title: string, author: string, published: string,
                      pages: number, website: string  }> = [];
  public editData:any = {};
  public showModalPopUp : boolean = false;


  constructor(
    private booksService: BooksService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {
    this.bookPopupForm = new FormGroup({
      code: new FormControl(null,
                         [Validators.required,
                          Validators.maxLength(49)
                         ]),
      title : new FormControl(null,
                         [Validators.required,
                          Validators.maxLength(49),
                          NoEmptyInputValidator.notOnlyWhitespace]),
      author : new FormControl(null,
                         [Validators.required,
                          Validators.maxLength(49),
                          NoEmptyInputValidator.notOnlyWhitespace]),
      published: new FormControl(null,
                          [Validators.required,
                           Validators.maxLength(49),
                           NoEmptyInputValidator.notOnlyWhitespace]),
      pages : new FormControl(null,
                          [Validators.required,
                           Validators.maxLength(49),
                           NoEmptyInputValidator.notOnlyWhitespace]),
      website : new FormControl(null,
                          [Validators.required,
                          Validators.maxLength(49),
                          NoEmptyInputValidator.notOnlyWhitespace]),
     });
  }

  ngOnInit() {
    this.booksService.getJSON().subscribe((data) => {
      this.booksList = data.books;
    });
  }

  editPopUpmodal = (bookList) => {
    this.showModalPopUp = !this.showModalPopUp;
    this.editData = Object.assign(bookList);
  }
  

  openFormModal() {
    const modalRef = this.modalService.open(this.bookPopupForm);

    modalRef.result
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  onSubmit() {
    this.booksList.push( {code: this.code, title: this.title, author: this.author,
                          published: this.published, pages: this.pages, website: this.website  } );

    this.code = null;
    this.title = null;
    this.author = null;
    this.published = null;
    this.pages = null;
    this.website = null;
  }

  toggleShow() {
    this.isShown = !this.isShown;
    }

    toggleShowModalPopup() {
      this.showModalPopUp = !this.showModalPopUp;
    }


}
