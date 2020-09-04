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
  petTypeValues=new Array('Doesn\'t Matter','Dog','Cat','Rabbit','Parrot','Other')
  petAgeValues=new Array('Doesn\'t Matter','Baby','Young','Adult','Senior')
  petColorValues=new Array('Doesn\'t Matter','Red','Orange','Yellow','Green','Blue','Purple','Brown',
                           'Cyan','Silver','Violet','Pink','Black','White','Gray');

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearchFilter(): void {
    if(this.petName==''){
      this.petName=null;
    }
    if(this.petBreed==''){
      this.petBreed=null;
    }

    this.router.navigate(['/pets'],
      {
        queryParams: {
          name: this.petName, type: this.petType, breed: this.petBreed
          , age: this.petAge, sex: this.petSex, color: this.petColor, page: 1
        }
      });
  }

}
