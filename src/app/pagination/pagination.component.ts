import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  currentPage:number;
  @Input()
  totalItems:number;
  @Input()
  pageSize:number=15;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public onPaginationPageChange(num:number){

    console.log("navigating")
    this.router.navigate(['/pets'], 
      { queryParams: { page: num } , queryParamsHandling: "merge" });
//     this.router.navigate(['.'], 
//       { queryParams: {name:this.petNameParams,type:this.petTypeParams,breed:this.petBreedParams
//         ,age:this.petAgeParams,gender:this.petGenderParams,color:this.petColorParams, pnum: num }  });
}

}
