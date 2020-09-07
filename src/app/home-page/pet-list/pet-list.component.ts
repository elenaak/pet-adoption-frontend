import { Component, OnInit, Input } from '@angular/core';
import { PetsSearchResult } from 'src/model/PetsSearchResult';
import { Pet } from 'src/model/Pet';

@Component({
  selector: 'home-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  constructor() { }

  @Input()
  pets:Array<Pet>;
  ngOnInit(): void {
  }

}
