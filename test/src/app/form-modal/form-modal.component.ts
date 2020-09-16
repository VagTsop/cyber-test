import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NoEmptyInputValidator } from '../custom-validators/no-empty-input-validator';

@Component({
  selector: 'app-form-modal',
  template: `
  <div class="modal-header">
      <h4 class="modal-title">Add a new book</h4>
      <button
        type="button"
        class="close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      ></button>
    </div>

    <div class="modal-body">
    <form [formGroup]="bookPopupForm" (ngSubmit)="onSubmit()">
    <div class="form-group">
        <label>Code</label>
        <input
          type="number"
          formControlName="code"
          class="form-control" />
          <span
          *ngIf="!bookPopupForm.get('code').valid && bookPopupForm.get('code').touched "
            class="help-block">Please enter a valid code!</span>
      </div>

      <div class="group">
        <label>Title</label>
        <input
          type="text"
          formControlName="title"
          class="form-control"/>
          <span
          *ngIf="!bookPopupForm.get('title').valid && bookPopupForm.get('title').touched"
          class="help-block">Please enter  valid data!</span>
      </div>

      <div class="group">
        <label>Author</label>
        <input
          type="text"
          formControlName="author"
          class="form-control"/>
          <span
          *ngIf="!bookPopupForm.get('author').valid && bookPopupForm.get('author').touched"
          class="help-block">Please enter  valid data!</span>
      </div>

      <div class="group">
        <label>Published</label>
        <input
          type="date"
          formControlName="published"
          class="form-control"/>
          <span
          *ngIf="!bookPopupForm.get('published').valid && bookPopupForm.get('published').touched"
          class="help-block">Please enter a valid date!</span>
      </div>

      <div class="group">
        <label>Pages</label>
        <input
          type="text"
          formControlName="pages"
          class="form-control"/>
          <span
          *ngIf="!bookPopupForm.get('pages').valid && bookPopupForm.get('pages').touched"
          class="help-block">Please enter a valid number!</span>
      </div>

      <div class="group">
        <label>Website</label>
        <input
          type="text"
          formControlName="website"
          class="form-control"/>
          <span
          *ngIf="!bookPopupForm.get('website').valid && bookPopupForm.get('website').touched"
          class="help-block">Please enter a valid url!</span>
      </div>

      <div class="group button-container">
        <span
        *ngIf="!bookPopupForm.valid && bookPopupForm.touched"
        class="help-block">Please enter valid data!</span>
        <button class="btn btn-primary" [disabled]="!bookPopupForm.valid" >Login</button>
      </div>

    </form>
    </div>
    <div class="modal-footer">
      <button (click)="activeModal.dismiss('Close clicked')">
        Close Clicked
      </button>
    </div>
    `,
})
export class FormModalComponent implements OnInit {
  bookPopupForm: FormGroup;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit()  {

    this.bookPopupForm = new FormGroup({
      code: new FormControl(null,
                         [Validators.required,
                          Validators.maxLength(49),
                          NoEmptyInputValidator.notOnlyWhitespace]),
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

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  onSubmit() {

  }

}
