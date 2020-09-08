import { Component, OnInit, Input } from '@angular/core';
import { faHeart, faStream } from '@fortawesome/free-solid-svg-icons';
import { Pet } from 'src/model/Pet';
import { PetsService } from 'src/app/pets.service';

@Component({
  selector: 'pet-search-list-item',
  templateUrl: './search-list-item.component.html',
  styleUrls: ['./search-list-item.component.css']
})
export class SearchListItemComponent implements OnInit {

  constructor(private petService: PetsService) { }
  heart = faHeart;
  @Input()
  pet: Pet;

  red: Boolean;

  ngOnInit(): void {
    this.petService.getLiked().subscribe(
      liked => {
        this.red = liked.filter(p => p.id == this.pet.id).length > 0;
        console.log(this.red);
      }
    );
  }
  onLike(id: Number) {
    this.petService.likeOrDislike(id).subscribe(
      res => this.ngOnInit()
    );
  }
}

