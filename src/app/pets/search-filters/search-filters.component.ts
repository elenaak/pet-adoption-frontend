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
  petType: String ='Doesn\'t Matter';
  @Input()
  petBreed: String;
  @Input()
  petAge: String='Doesn\'t Matter';
  @Input()
  petSex: String='Doesn\'t Matter';
  @Input()
  petColor: String='Doesn\'t Matter';
  petTypeValues=new Array('Doesn\'t Matter','Dog','Cat','Rabbit','Parrot','Other');
  petAgeValues=new Array('Doesn\'t Matter','Baby','Young','Adult','Senior');
  petSexValues=new Array('Doesn\'t Matter','Male','Female');
  petColorValues=new Array('Doesn\'t Matter','Red','Orange','Yellow','Green','Blue','Purple','Brown',
                           'Cyan','Silver','Violet','Pink','Black','White','Gray');
  

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.petType==null){
      this.petType ='Doesn\'t Matter';
    }
    if(this.petAge==null){
      this.petAge ='Doesn\'t Matter';
    }
    if(this.petSex==null){
      this.petSex ='Doesn\'t Matter';
    }
    if(this.petColor==null){
      this.petColor ='Doesn\'t Matter';
    }
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
