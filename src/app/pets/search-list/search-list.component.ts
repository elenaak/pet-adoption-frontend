import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/model/Pet';

@Component({
  selector: 'pet-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  @Input()
  items:Array<Pet>;
  constructor() { }

  ngOnInit(): void {
  }


}
  