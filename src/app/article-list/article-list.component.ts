import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../z-service/article.service';
import { map, switchMap } from 'rxjs/operators';
import { ArticleSearchResult } from 'src/model/ArticleSearchResult';
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private router:Router,
    private articleService:ArticleService) { }

  theme:String;
  size=5;
  articles: ArticleSearchResult;
  error:String;
  page:number;
  next=false;
  prev=false;
  nextIcon= faChevronRight;
  prevIcon=faChevronLeft;
  loading=false;

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(paramMap =>{
        this.theme = paramMap.get('theme')!
        return paramMap.get('page')!
      }),
      switchMap(page => {
        this.page=+page;
        this.prev=this.page!=1;
        this.loading=true;
        return this.articleService.getList(this.theme,+page,this.size)
      })
    ).subscribe(a => {
      this.loading=false;
       this.articles=a;
       this.next = this.page*5<this.articles.totalElements;
      },
      error => {
        this.error = error;
      });
  }

  onNext(){
    this.router.navigate([`/articles/${this.theme}/page/${this.page+1}`])
  }

  onPrev(){
    this.router.navigate([`/articles/${this.theme}/page/${this.page-1}`])
  }
}
