import { Component, OnInit, Input,Inject } from '@angular/core';
import {Contact} from '../shared/contact';
import { ContactService} from '../services/contact.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';




@Component({
  selector: 'app-contactdetail',
  templateUrl: './contactdetail.component.html',
  styleUrls: ['./contactdetail.component.scss']
})

export class ContactdetailComponent implements OnInit {
  contact: Contact;
  contactIds: string[];
  prev: string;
  next: string;
  contactcopy: Contact;
  constructor(private contactservice: ContactService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') private BaseURL) { }

 
    ngOnInit() {
      this.contactservice.getContactIds().subscribe(contactIds => this.contactIds = contactIds);
      this.route.params.pipe(switchMap((params: Params) => this.contactservice.getContact(params['id'])))
      .subscribe(contact => { this.contact = contact ; this.contactcopy = contact; this.setPrevNext(contact.id); });
    }
    setPrevNext(contactId: string) {
      const index = this.contactIds.indexOf(contactId);
      this.prev = this.contactIds[(this.contactIds.length + index - 1) % this.contactIds.length];
      this.next = this.contactIds[(this.contactIds.length + index + 1) % this.contactIds.length];
    }

  goBack(): void {
    this.location.back();
  }

}
