import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../../z-service/pets.service';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/model/Pet';
import { AdCreateService } from '../../../z-service/ad-create.service';
import { map, switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ad-form-edit',
  templateUrl: './ad-form-edit.component.html',
  styleUrls: ['./ad-form-edit.component.css']
})
export class AdFormEditComponent implements OnInit {

  petForm = false;
  mrForm = false;
  contactForm = false;
  pet: Pet;
  error: Boolean = false;
  errorText = ""
  petId: Number;
  loading = false;


  constructor(private petsService: PetsService,
    private location: Location,
    private adCreateService: AdCreateService,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(paramMap => paramMap.get('id')!),
      switchMap(id => {
        this.petId = (+id)
        return this.petsService.getPet(+id)
      })
    ).subscribe(pet => { this.pet = pet; },
      error => {
        this.error = error.statusText;
      });
  }

  setPet(petForm: any) {
    this.petForm = petForm;
  }

  setMR(mrForm: any) {
    this.mrForm = mrForm;
  }

  setContact(contact: any) {
    this.contactForm = true;
    this.loading = true;
    this.editAd();
  }
  editAd() {
    this.adCreateService.editAd(this.petId).subscribe(
      pet => {
        this.loading = false;
        this.location.back();
      },
      err => {
        this.loading = false;
        this.error = true;
        this.errorText = err.error;
      }
    );
  }
}
