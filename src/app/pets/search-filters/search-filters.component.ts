import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pet-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent implements OnInit {
  @Input()
  petName: String;
  @Input()
  petType: String;
  @Input()
  petBreed: String;
  @Input()
  petAge: String;
  @Input()
  petSex: String;
  @Input()
  petColor: String;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearchFilter(): void {
    this.router.navigate(['/pets'],
    
      {
        queryParams: {
          name: this.petName, type: this.petType, breed: this.petBreed
          , age: this.petAge, gender: this.petSex, color: this.petColor, page: 1
        }
      });
  }


}
