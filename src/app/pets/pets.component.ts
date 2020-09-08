import { Component, OnInit } from '@angular/core';
import { Pet } from '../../model/Pet'
import { PagerService } from '../pager.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  //params for pagination on Click event
  currentPageParams: number;

  //pagination parametars
  currentPage: number = 1;
  pageSize: number = 15;
  totalItems: number = 15;
  //list items

  //searchFilter parametars
  petName:string;
  petType:string;
  petBreed:string;
  petAge:string;
  petSex:string;
  petColor:string;
  items: Array<Pet>;

  constructor(private pagerService: PagerService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParamMap.pipe(
      switchMap(params => {
         this.petName = params.get('name');
         this.petType = params.get('type');
        this.petBreed = params.get('breed');
        //replace age with calendar o
        this.petAge = params.get('age');
        this.petSex = params.get('sex');
        this.petColor = params.get('color');
        this.currentPageParams= Number(params.get('page'));
        if (this.currentPageParams == 0) {
          this.currentPageParams = 1;
        }
        this.pageSize= Number(params.get('size'));
        if (this.pageSize == 0) {
          this.pageSize = 15;
        }
        console.log(this.petName,this.petSex)
        return this.pagerService.getPageList(this.petName,this.petType,this.petBreed,this.petAge,this.petSex,this.petColor,this.currentPageParams,this.pageSize);
      }),
    ).subscribe(petSearchResult => {
      console.log(petSearchResult)
      this.items = petSearchResult.content;
      this.totalItems = petSearchResult.totalElements;
      this.currentPage = this.currentPageParams;
      
    }, error => {
      console.log('Error: ', error);
    });
  }
}
