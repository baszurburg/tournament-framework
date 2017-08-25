import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {ArticleService} from '../../articles';
import {Article} from '../article';

@Component({
  selector: 'art-article-detail',
  templateUrl: './article-detail.component.html'
})
export class ArticleDetailComponent implements OnInit, OnDestroy {

  routeSubscription: Subscription;
  articleSubscription: Subscription;

  @Input() providedArticleId: string;
  articleId: string;
  selectedArticle: Article;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private articleService: ArticleService) { }

  ngOnInit() {
    this.articleSubscription = this.articleService.articleFetched.subscribe(
      (article: Article) => this.selectedArticle = article
    );

    if (this.providedArticleId) {
      this.selectedArticle = this.articleService.getArticle(this.providedArticleId);
    } else {
      this.routeSubscription = this.route.params.subscribe(
        (params: any) => {
          this.articleId = params['id'];
          this.selectedArticle = this.articleService.getArticle(this.articleId);
        }
      );
    }

  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
    this.articleSubscription.unsubscribe();
  }

}
