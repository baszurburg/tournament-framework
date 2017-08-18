import {Component, Input} from '@angular/core';
import {Article} from '../../models/article';

@Component({
  selector: 'art-article-listitem',
  templateUrl: './article-listitem.component.html'
})
export class ArticleListitemComponent {
  @Input() article: Article;
}
