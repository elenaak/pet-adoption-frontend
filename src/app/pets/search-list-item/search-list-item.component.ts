import { Component, OnInit, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Pet } from 'src/model/Pet';
import { PetsService } from 'src/app/pets.service';

@Component({
  selector: 'pet-search-list-item',
  templateUrl: './search-list-item.component.html',
  styleUrls: ['./search-list-item.component.css']
})
export class SearchListItemComponent implements OnInit {

  constructor(private petService:PetsService) { }
  heart = faHeart;
  @Input()
  pet:Pet;
  ngOnInit(): void {
  }
  onLike(id: Number) {
    this.petService.likeOrDislike(id).subscribe(
      res => this.ngOnInit()
    );
  }
}

