import { Component, OnInit } from '@angular/core';
import { Pet } from '../../../model/Pet';
import { AdCreateService } from '../../ad-create.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.css']
})
export class AdFormComponent implements OnInit {

  petForm = false;
  mrForm = false;
  contactForm = false;

  constructor(private adCreateService: AdCreateService,
    private route: Router) { }

  ngOnInit(): void {
  }

  setPet(petForm: any) {
    this.petForm = petForm;
  }

  setMR(mrForm: any) {
    this.mrForm = mrForm;
  }

  setContact(contact: any) {
    this.contactForm = true;
    this.createAd();
  }
  createAd() {
    this.adCreateService.createAd().subscribe(
      pet => {
        console.log(pet.name)
        this.route.navigate(['/pets']);

      }
    );
  }
}
