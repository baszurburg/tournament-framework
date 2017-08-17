import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../models/article';

@Component({
  selector: 'art-article-listitem',
  templateUrl: './article-listitem.component.html'
})
export class ArticleListitemComponent implements OnInit {

  @Input() article: Article;
  constructor() { }

  ngOnInit() {
  }

}
