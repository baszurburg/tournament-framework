import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {Article, ArticleService} from '../../articles';
import {Subscription} from 'rxjs/Subscription';
import { AppSettings } from '../../app.settings';

@Component({
  selector: 'art-article-list',
  templateUrl: './article-list.component.html'
})
export class ArticleListComponent implements OnInit, OnDestroy {

  @Input() listType: string;

  articleSubscription: Subscription;
  articles: Article[] = [];

  filterValue: string;
  filterProperty: string;

  constructor(private articleService: ArticleService) {

  }

  ngOnInit() {
    if (this.listType === 'nav') {
      this.filterValue = AppSettings.ARTICLE_CATEGORY_NAV;
      this.filterProperty = 'categories';
    }
    this.articleSubscription = this.articleService.articlesChanged.subscribe(
      (articles: Article[]) => this.articles = articles
    );
    this.articles = this.articleService.getArticles();
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }

}
