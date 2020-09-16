import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Input()
  currentPage: number;
  @Input()
  totalItems: number;
  @Input()
  pageSize: number = 15;
  constructor(private router: Router) { }

  public onPaginationPageChange(num: number) {

    console.log("navigating")
    this.router.navigate(['/pets'],
      { queryParams: { page: num }, queryParamsHandling: "merge" });
  }

}
