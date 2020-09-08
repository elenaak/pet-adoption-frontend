import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PagerService } from 'src/app/pager.service';

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
  

  constructor(private router: Router,private pageService:PagerService) { }

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
    let queryParamPetType=this.petType;
    if(queryParamPetType=='Doesn\'t Matter'){
      queryParamPetType = null;
    }
    let queryParamPetAge=this.petAge;
    if(queryParamPetAge=='Doesn\'t Matter'){
      queryParamPetAge = null;
    }
    let queryParamPetSex=this.petSex;
    if(queryParamPetSex=='Doesn\'t Matter'){
      queryParamPetSex = null;
    }
    let queryParamPetColor=this.petColor;
    if(queryParamPetColor=='Doesn\'t Matter'){
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

}
