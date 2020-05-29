import { Injectable } from '@angular/core';
import { Contact } from '../shared/contact';

import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Observable ,of } from 'rxjs';
import { CONTACTS } from '../shared/contacts';
import { delay } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';




@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient,private processHTTPMsgService: ProcessHTTPMsgService) { }
  
  
  
  getContacts(): Observable<Contact[]> {
    return  this.http.get<Contact[]>(baseURL + 'contact')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getContact(id:string): Observable<Contact> {
    return this.http.get<Contact>(baseURL + 'contact/' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getContactIds(): Observable<string[] | any> {
    return this.getContacts().pipe(map(contacts => contacts.map(contact => contact.id)))
    .pipe(catchError(error => error));
  }

  putContact(contact: Contact): Observable<Contact> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Contact>(baseURL + 'contact/' + contact.id, contact, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }
  
  
}
