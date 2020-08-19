import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { from } from 'rxjs';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {

  constructor() { }

  heart = faHeart; 

  ngOnInit(): void {
  }
  onClick(){
    
  }

}
