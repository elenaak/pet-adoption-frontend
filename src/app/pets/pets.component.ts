import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Pet } from '../../model/Pet'


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  constructor() { }

  heart = faHeart; 


  ngOnInit(): void {
   
  }
  onClick(){
    
  }

}
