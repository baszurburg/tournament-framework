import { Component, OnInit, OnDestroy } from '@angular/core';
import {ArticleService} from '../../articles';
import {Article} from '../../models/article';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'art-article-list',
  templateUrl: './article-list.component.html'
})
export class ArticleListComponent implements OnInit {

  articleSubscription: Subscription;

  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleSubscription = this.articleService.articlesChanged.subscribe(
      (articles: Article[]) => this.articles = articles
    );
    this.articles = this.articleService.getArticles();
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }

}
