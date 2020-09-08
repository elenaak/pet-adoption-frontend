import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/model/Pet';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeSquare, faMapMarkerAlt, faCity } from '@fortawesome/free-solid-svg-icons';
import { PetsService } from '../pets.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  constructor(private petsService: PetsService,
    private route: ActivatedRoute,
    private locatin: Location) { }

  phone = faPhone;
  email = faEnvelopeSquare;
  location = faMapMarkerAlt;
  city = faCity;
  @Input() id: Number;
  pet: Pet = new Pet();
  error: String;


  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(paramMap => paramMap.get('id')!),
      switchMap(id => {
        return this.petsService.getPet(+id)
      })
    ).subscribe(pet => {
      this.pet = pet;
    },
      error => {
        this.error = error.statusText;
      });
  }
}
