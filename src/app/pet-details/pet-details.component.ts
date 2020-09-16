import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/model/Pet';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeSquare, faMapMarkerAlt, faCity } from '@fortawesome/free-solid-svg-icons';
import { PetsService } from '../z-service/pets.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { TokenStorageService } from '../token-storage.service';
import { CurrentUser } from 'src/model/CurrentUser';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  constructor(private petsService: PetsService,
    private route: ActivatedRoute,
    private locatin: Location,
    private tokenService: TokenStorageService) { }

  @Input() id: Number;
  phone = faPhone;
  email = faEnvelopeSquare;
  location = faMapMarkerAlt;
  city = faCity;
  pet: Pet;
  error: String;
  isOwner = true;
  currentUser: CurrentUser;
  loading = false;

  ngOnInit(): void {
    if (this.tokenService.getToken())
      this.currentUser = this.tokenService.getUser();
    this.loading = true;
    this.route.paramMap.pipe(
      map(paramMap => paramMap.get('id')!),
      switchMap(id => {
        return this.petsService.getPet(+id)
      })
    ).subscribe(pet => {
      this.loading = false;
      this.pet = pet;
      if (this.currentUser) {
        this.isOwner = this.currentUser.username == this.pet.owner.username;
      }
    },
      error => {
        this.loading = false;
        this.error = error;
      });
  }
}
