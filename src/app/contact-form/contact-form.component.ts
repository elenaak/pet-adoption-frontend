import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from '../../model/Contact';
import { AdCreateService} from '../ad-create.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contact: Contact = new Contact();

  @Output() contactForm = new EventEmitter<boolean>();

  constructor(private adCreateService: AdCreateService) { }

  ngOnInit(): void {
  }


  onSubmit(): void {
    this.adCreateService.setContact(this.contact);
    this.contactForm.emit(true)
  }
}
