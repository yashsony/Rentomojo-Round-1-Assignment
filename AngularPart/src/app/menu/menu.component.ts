import { Component, OnInit,Inject} from '@angular/core';
import { Contact } from '../shared/contact';

import { ContactService } from '../services/contact.service';
import { baseURL } from '../shared/baseurl';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  
  
  

  
  contacts: Contact[];
  errMess: string;


  constructor(private contactService: ContactService,
     @Inject('BaseURL') private BaseURL){}
  
  ngOnInit(): void {
     this.contactService.getContacts()
     .subscribe((contacts)=> this.contacts =contacts,errmess => this.errMess = <any>errmess);
     
}
}