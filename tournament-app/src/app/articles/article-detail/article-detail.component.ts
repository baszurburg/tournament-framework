import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {Subscription} from 'rxjs/Subscription';
import {ArticleService} from '../../articles';
import {Article} from '../article';

@Component({
  selector: 'art-article-detail',
  templateUrl: './article-detail.component.html'
})
export class ArticleDetailComponent implements OnInit {

  subscription: Subscription;
  articleSubscription: Subscription;

  articleId: string;
  selectedArticle: Article;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private articleService: ArticleService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.articleId = params['id'];
        this.selectedArticle = this.articleService.getArticle(this.articleId);
      }
    );
    this.articleSubscription = this.articleService.articleFetched.subscribe(
      (article: Article) => this.selectedArticle = article
    );
  }

  ngOnDestry() {
    this.subscription.unsubscribe();
    this.articleSubscription.unsubscribe();
  }

}
