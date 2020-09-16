import { Component, OnInit } from '@angular/core';
import { PagerService } from '../../z-service/pager.service';
import { Pet } from '../../../model/Pet';

@Component({
  selector: 'app-pets-home-page',
  templateUrl: './pets-home-page.component.html',
  styleUrls: ['./pets-home-page.component.css']
})
export class PetsHomePageComponent implements OnInit {

  page = 0;
  size = 3;
  pets: Pet[];

  constructor(private pagerService: PagerService) { }

  ngOnInit(): void {
    this.pagerService.getAll(this.page, this.size).subscribe(
      result => this.pets = result.content
    );
  }

}
