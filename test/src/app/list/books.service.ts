import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
   constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get('./assets/data/book.data.json');
    }






}

