import { Component, OnInit } from '@angular/core';
import { PetsService } from '../pets.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { TokenStorageService } from '../token-storage.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adopt-request-create',
  templateUrl: './adopt-request-create.component.html',
  styleUrls: ['./adopt-request-create.component.css']
})
export class AdoptRequestCreateComponent implements OnInit {

  error: String;
  logged = false;
  succ: Boolean;

  constructor(private petsService: PetsService,
    private route: ActivatedRoute,
    private token: TokenStorageService,
    private location: Location) { }

  ngOnInit(): void {
    if (this.token.getUser) {
      this.logged = true;
      this.route.paramMap.pipe(
        map(paramMap => paramMap.get('id')!),
        switchMap(id => {
          return this.petsService.createAdoptRequest(+id);
        })
      ).subscribe(pet => { this.succ = true },
        error => {
          this.error = error.statusText;
        });
    }
  }
  onBack() {
    this.location.back();
  }
}
