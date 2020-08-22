import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/model/Pet';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeSquare, faMapMarkerAlt, faCity } from '@fortawesome/free-solid-svg-icons';
import { AdCreateService } from '../ad-create.service';
import { MedicalRecord } from 'src/model/MedicalRecord';
import { Contact } from 'src/model/Contact';

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
  pet: Pet = new Pet();


  ngOnInit(): void {
    //ova treba preku input da go prima
    this.pet.medicalRecord = new MedicalRecord();
    this.pet.contact = new Contact();
    this.pet.age = 2;
    this.pet.breed = "Domestic Short Hair";
    this.pet.color = "white";
    this.pet.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna";
    this.pet.name = "Lucy";
    this.pet.sex = "Female";
    this.pet.type = "Cat";
    this.pet.contact.name = "Isabelle";
    this.pet.contact.telephone = "85844477474";
    this.pet.contact.lastName = "lmsdc";
    this.pet.contact.city = "Skopje";
    this.pet.contact.address = "akkldskksdklklk";
    this.pet.contact.email = "admin@live.com";
    this.pet.medicalRecord.height = 50;
    this.pet.medicalRecord.weight = 10;
    this.pet.medicalRecord.neutered = true;
    this.pet.medicalRecord.allergies = "alelwnefldsvn";
    this.pet.medicalRecord.vaccines = "dksdksklsld";

  }

}
