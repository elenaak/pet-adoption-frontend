import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-dog-articles',
  templateUrl: './cat-dog-articles.component.html',
  styleUrls: ['./cat-dog-articles.component.css']
})
export class CatDogArticlesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClickCats(){
    this.router.navigate(['/articles/cats/page/1']);
  }

  onClickDogs(){
    this.router.navigate(['/articles/dogs/page/1']);
  }
}
