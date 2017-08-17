interface IArticleContent {
  brief: string;
  extended: string;
}

export class Article {

  private _id: string;
  private _title: string;
  private _state: string;
  private _author: string;
  private _publishedDate?: string;
  private _image?: any;
  private _content: IArticleContent;
  private _categories?: string[];

  // getters and setters

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get categories(): string[] {
    return this._categories;
  }
  get content(): IArticleContent {
    return this._content;
  }
  get image(): any {
    return this._image;
  }
  get publishedDate(): string {
    return this._publishedDate;
  }
  get author(): string {
    return this._author;
  }
  get state(): string {
    return this._state;
  }
  get title(): string {
    return this._title;
  }

  set categories(value: string[]) {
    this._categories = value;
  }
  set content(value: IArticleContent) {
    this._content = value;
  }
  set image(value: any) {
    this._image = value;
  }
  set publishedDate(value: string) {
    this._publishedDate = value;
  }
  set author(value: string) {
    this._author = value;
  }
  set state(value: string) {
    this._state = value;
  }
  set title(value: string) {
    this._title = value;
  }

  // Constructor

  constructor(articleObj: any) {
    this.id = articleObj._id;
    this.title = articleObj.title;
    this.state = articleObj.state;
    this.author = articleObj.author;
    this.publishedDate = articleObj.publishedDate;
    this.image = articleObj.image;
    this.content = articleObj.content;
    this.categories = articleObj.categories;
  }

}
