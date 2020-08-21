import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/model/Pet';
import { Contact } from 'src/model/Contact';
import { MedicalRecord } from 'src/model/MedicalRecord';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeSquare, faMapMarkerAlt, faCity} from '@fortawesome/free-solid-svg-icons';
import { AdCreateService } from '../ad-create.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  constructor() { }

  phone = faPhone;
  email = faEnvelopeSquare;
  location = faMapMarkerAlt;
  city = faCity;

  //@Input() pet: Pet | undefined = undefined;
  pet : Pet = new Pet();
  contact : Contact = new Contact();
  medicalRecord: MedicalRecord = new MedicalRecord();

  ngOnInit(): void {
    //ova treba preku input da go prima
    this.pet.age=2;
    this.pet.breed="Domestic Short Hair";
    this.pet.color="white";
    this.pet.description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna";
    this.pet.name="Lucy";
    this.pet.sex="Female";
    this.pet.type="Cat";
    this.contact.name = "Isabelle";
    this.contact.telephone="85844477474";
    this.contact.lastName="lmsdc";
    this.contact.city="Skopje";
    this.contact.address="akkldskksdklklk";
    this.contact.email="admin@live.com";
    this.medicalRecord.height=50;
    this.medicalRecord.weight=10;
    this.medicalRecord.neutered=true;
    this.medicalRecord.allergies="alelwnefldsvn";
    this.medicalRecord.vaccines="dksdksklsld";

  }

}
