import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/pets.service';
import { User } from 'src/model/User';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-adopt-requests',
  templateUrl: './adopt-requests.component.html',
  styleUrls: ['./adopt-requests.component.css']
})
export class AdoptRequestsComponent implements OnInit {

  constructor(private petsService: PetsService,
    private route: ActivatedRoute) { }

  users: User[];
  empty: true;
  petId: Number;
  email=faEnvelopeSquare;
  loading=false;

  ngOnInit(): void {
    this.loading=true;
    this.route.paramMap.pipe(
      map(paramMap => paramMap.get('id')!),
      switchMap(id => {
        this.petId = (+id)
        return this.petsService.getAdoptRequests(this.petId);
      })
    ).subscribe(users => { 
      this.loading=false;
      this.users = users; 
    });
  }

}
