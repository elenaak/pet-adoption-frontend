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

  ngOnInit(): void {//this.activatedRoute.params.subscribe(paramsId => {
    this.route.params.subscribe(
      paramsId => this.id = (+paramsId.id)
    );
    console.log(this.id);
  }

  onYes() {
    console.log(this.id);
    this.petsService.deletePet(this.id).subscribe(
      succ => { this.location.back() },
      error => {
        this.error = error.error;
        ;
      });
  }

  onCancel(){
    this.location.back();
  }

}
