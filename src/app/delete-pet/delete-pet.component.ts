import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsService } from '../pets.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-pet',
  templateUrl: './delete-pet.component.html',
  styleUrls: ['./delete-pet.component.css']
})
export class DeletePetComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private location: Location,
    private petsService: PetsService) { }

  error: String;
  id: Number;
  loading = false;

  ngOnInit(): void {
    this.route.params.subscribe(
      paramsId => this.id = (+paramsId.id)
    );
  }

  onYes() {
    this.loading = true;
    this.petsService.deletePet(this.id).subscribe(
      succ => {
        this.loading = false;
        this.location.back();
      },
      error => {
        this.loading = true;
        this.error = error.error;
      });
  }

  onCancel() {
    this.location.back();
  }

}
