import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/model/Pet';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeSquare, faMapMarkerAlt, faCity } from '@fortawesome/free-solid-svg-icons';
import { PetsService} from '../pets.service';
import { Contact } from 'src/model/Contact';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  constructor(private petsService:PetsService) { }

  phone = faPhone;
  email = faEnvelopeSquare;
  location = faMapMarkerAlt;
  city = faCity;

  //@Input() pet: Pet | undefined = undefined;
  pet: Pet = new Pet();


  ngOnInit(): void {
    //ova treba preku input da go prima
    // this.pet.contact = new Contact();
    // this.pet.age = 2;
    // this.pet.breed = "Domestic Short Hair";
    // this.pet.color = "white";
    // this.pet.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna";
    // this.pet.name = "Lucy";
    // this.pet.sex = "Female";
    // this.pet.type = "Cat";
    // this.pet.contact.firstName = "Isabelle";
    // this.pet.contact.telephone = "85844477474";
    // this.pet.contact.lastName = "lmsdc";
    // this.pet.contact.city = "Skopje";
    // this.pet.contact.address = "akkldskksdklklk";
    // this.pet.contact.email = "admin@live.com";
    // this.pet.height = 50;
    // this.pet.weight = 10;
    // this.pet.neutered = true;
    // this.pet.allergies = "alelwnefldsvn";
    // this.pet.vaccines = "dksdksklsld";
    this.getPet();
  }

  getPet(){
    this.petsService.getPet(4).subscribe(
      pet => this.pet = pet
    );
  }

}
