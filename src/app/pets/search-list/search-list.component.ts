import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/model/Pet';
import { PetsService } from '../../z-service/pets.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'pet-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent {

  @Input()
  items: Array<Pet>;
}
