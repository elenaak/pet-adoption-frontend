import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Contact } from 'src/model/Contact';
import { AdCreateService } from '../../../z-service/ad-create.service';

@Component({
  selector: 'app-contact-form-edit',
  templateUrl: './contact-form-edit.component.html',
  styleUrls: ['./contact-form-edit.component.css']
})
export class ContactFormEditComponent {


  @Input() contact: Contact;

  @Output() contactForm = new EventEmitter<boolean>();

  constructor(private adCreateService: AdCreateService) { }

  onSubmit(): void {
    this.adCreateService.setContact(this.contact);
    this.contactForm.emit(true)
  }
}
