import { Component, OnInit } from '@angular/core';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  imgPhone = faPhoneAlt;
  imgLocation = faMapMarkerAlt;
  imgEnvelope = faEnvelope;
}
