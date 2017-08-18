import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import {Article} from './article';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ArticleService {

  articlesChanged = new EventEmitter<Article[]>();
  articleFetched = new EventEmitter<Article>();
  articles: Article[] = [];
  article: Article;

  private articlesUrl = 'http://localhost:3000/api/articles';

  constructor(private http: Http) { }

  getArticle(id) {
    if (this.articles.length !== 0) {
      return this.articles.filter(
        article => article._id === id)[0];
    }
    this.fetchArticle(id);
  }

  getArticles(): Article[] {
    console.log('get articles - length: ' + this.articles.length);
    if (this.articles.length !== 0) {
      return this.articles;
    }
    this.fetchArticles();
  }

  fetchArticle(id) {
    console.log('fetch article(1)');
    document.cookie = 'XSRF-TOKEN=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.http.get(this.articlesUrl + '/' +id )
      .map((response: Response) => response.json().article)
      .subscribe(
        (data) => {
          this.article = data;
          console.log(data);
          this.articleFetched.emit(this.article);
        }
      );
  }

  fetchArticles() {
    console.log('fetch articles');
    document.cookie = 'XSRF-TOKEN=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.http.get(this.articlesUrl)
      .map((response: Response) => response.json().articles.sort(function(a,b) {
        return (a.sortOrder > b.sortOrder) ? 1 : ((b.sortOrder > a.sortOrder) ? -1 : 0);
      }))
      .subscribe(
        (data) => {
          this.articles = data;
          this.articlesChanged.emit(this.articles);
        }
      );
  }

}
