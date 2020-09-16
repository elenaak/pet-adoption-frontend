import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { ArticleService } from '../../z-service/article.service';
import { Article } from '../../../model/Article';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css']
})
export class MyArticlesComponent implements OnInit {

  constructor(private articleService: ArticleService,
    private router: Router) { }

  users = faUsers;
  all: Article[];
  sublist: Article[];
  limit = 5;
  stop = false;
  empty = false;
  size = 0;
  loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.articleService.getArticlesByUser().subscribe(
      articles => {
        this.loading = false;
        this.all = articles;
        this.sublist = this.all.slice(0, this.limit);
        this.size = this.all.length;
        if (this.size == 0)
          this.empty = true;
      }
    );
  }
  onClick() {
    this.limit += 5;
    if (this.limit >= this.all.length) {
      this.stop = true;
    }
    this.sublist = this.all.slice(0, this.limit);
  }

}
