import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/model/Article';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;
  error: String;
  loading = false;
  back= faChevronLeft;


  constructor(private articleService: ArticleService,
    private route: ActivatedRoute,
    private location:Location) { }

  ngOnInit(): void {
    this.loading=true;
    this.route.paramMap.pipe(
      map(paramMap => paramMap.get('id')!),
      switchMap(id => {
        return this.articleService.getArticle(+id);
      })
    ).subscribe(article => {
        this.loading=false;
       this.article = article },
      error => {
        this.loading=false;
        this.error = error.statusText;
      });
  }

  onClick(){
    this.location.back();
  }

}
