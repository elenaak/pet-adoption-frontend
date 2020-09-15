import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ArticleSearchResult} from '../../model/ArticleSearchResult';
import {Article} from '../../model/Article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  createArticle(article: Article) {
    return this.http.post("http://localhost:8080/api/article/create", {
      title: article.title,
      description: article.description,
      content: article.content,
      image: article.image,
      theme: article.theme
    });
  }

  getArticle(id: Number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:8080/api/article/${id}`)
  }

  getList(theme: String, page: number, size: number): Observable<ArticleSearchResult> {
    var param = "";
    param = param.concat(`theme=${theme}`);
    param = param.concat(`&page=${page - 1}`);
    param = param.concat(`&size=${size}`);
    return this.http.get<ArticleSearchResult>(`http://localhost:8080/api/article/search?${param}`)
  }

  getArticlesByUser(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:8080/api/my-articles')
  }
}
