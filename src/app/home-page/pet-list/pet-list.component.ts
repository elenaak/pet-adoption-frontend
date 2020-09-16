import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/model/Pet';

@Component({
  selector: 'home-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent {

  @Input()
  pets: Array<Pet>;
}
