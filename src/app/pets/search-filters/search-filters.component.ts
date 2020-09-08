import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pet-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent implements OnInit {
  collapse: boolean;
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
  petTypeValues = new Array('Doesn\'t Matter', 'Dog', 'Cat', 'Rabbit', 'Parrot', 'Other');
  petAgeValues = new Array('Doesn\'t Matter', 'Baby', 'Young', 'Adult', 'Senior');
  petSexValues = new Array('Doesn\'t Matter', 'Male', 'Female');
  petColorValues = new Array('Doesn\'t Matter', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown',
    'Cyan', 'Silver', 'Violet', 'Pink', 'Black', 'White', 'Gray');


  constructor(private router: Router) {
  }
  ngOnInit(): void {
    if (this.petType == null) {
      this.petType = 'Doesn\'t Matter';
    }
    if (this.petAge == null) {
      this.petAge = 'Doesn\'t Matter';
    }
    if (this.petSex == null) {
      this.petSex = 'Doesn\'t Matter';
    }
    if (this.petColor == null) {
      this.petColor = 'Doesn\'t Matter';
    }

    if (window.screen.width < 768) {
      this.collapse = true;
    }
    else {
      this.collapse = false;
    }
  }

  onSearchFilter(): void {

    if (this.petName == '') {
      this.petName = null;
    }
    if (this.petBreed == '') {
      this.petBreed = null;
    }
    let queryParamPetType = this.petType;
    if (queryParamPetType == 'Doesn\'t Matter') {
      queryParamPetType = null;
    }
    let queryParamPetAge = this.petAge;
    if (queryParamPetAge == 'Doesn\'t Matter') {
      queryParamPetAge = null;
    }
    let queryParamPetSex = this.petSex;
    if (queryParamPetSex == 'Doesn\'t Matter') {
      queryParamPetSex = null;
    }
    let queryParamPetColor = this.petColor;
    if (queryParamPetColor == 'Doesn\'t Matter') {
      queryParamPetColor = null;
    }
    this.router.navigate(['/pets'],
      {
        queryParams: {
          name: this.petName, type: queryParamPetType, breed: this.petBreed
          , age: queryParamPetAge, sex: queryParamPetSex, color: queryParamPetColor, page: 1
        }
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    if (event.target.innerWidth < 768) { // 768px portrait
      this.collapse = true;
    }
    else {
      this.collapse = false;
    }
  }

}
