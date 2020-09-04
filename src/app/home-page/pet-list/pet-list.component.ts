import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  constructor() { }
  //replace with real data
  items=new Array('','','','','');
  ngOnInit(): void {
  }

}
