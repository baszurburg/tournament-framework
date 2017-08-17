import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../articles';
import {Article} from '../../models/article';

@Component({
  selector: 'art-article-list',
  templateUrl: './article-list.component.html'
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
    console.log(this.articles);
  }

}
