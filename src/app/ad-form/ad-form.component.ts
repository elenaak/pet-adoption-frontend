import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/model/Pet';
import { AdCreateService} from '../ad-create.service';

@Component({
  selector: 'app-ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.css']
})
export class AdFormComponent implements OnInit {

  petForm = false;
  mrForm = false;
  contactForm = false;

  constructor(private adCreateService: AdCreateService) { }

  ngOnInit(): void {
  }

  setPet(petForm: any){
    this.petForm = petForm;
  }

  setMR(mrForm: any){
    this.mrForm = mrForm;
  }

  setContact(contact: any){
    this.contactForm = true;
    this.createAdd();
  }
  createAdd(){
      this.adCreateService.createAd();
  }

}
