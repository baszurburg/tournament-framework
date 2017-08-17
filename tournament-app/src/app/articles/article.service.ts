import { Injectable } from '@angular/core';
import {Article} from '../models/article';

@Injectable()
export class ArticleService {


  private _articles: Article[] = [
    new Article({"_id":"5974c6f8bd851f197f512bd2","title":"First Post","author":"5974b57b8f6666152b4d9803","publishedDate":"2017-07-22T22:00:00.000Z","categories":["5974c6e0bd851f197f512bd1"],"content":{"brief":"<p>Uitleg tournament-framework</p>","extended":"<h1><a id=\"tournament-framework\" href=\"#tournament-framework\">tournament-framework</a></h1>\r\n<p>tournament software</p>\r\n<h2><a id=\"how-to-setup-and-start\" href=\"#how-to-setup-and-start\">How to setup and start</a></h2>\r\n<p>The database used for both the cms and the tournament app is mongodb<br /> via keystone.js<br /> So make sure you have mongodb installed</p>\r\n<h3><a id=\"starting-mongo-db\" href=\"#starting-mongo-db\">Starting MONGO DB</a></h3>\r\n<h4><a id=\"osx\" href=\"#osx\">OSX</a></h4>\r\n<p>$ mongod</p>\r\n<p>to administer the database, use 'mongoobooster'</p>\r\n<h4><a id=\"linux\" href=\"#linux\">Linux</a></h4>\r\n<h5><a id=\"commands\" href=\"#commands\">Commands</a></h5>\r\n<p>start: <code>sudo service mongod start</code><br /> stop: <code>sudo service mongod stop</code><br /> restart: <code>sudo service mongod restart</code><br /> check if mongod is running: <code>ps aux | grep mongod</code></p>\r\n<h4><a id=\"mongo-shell\" href=\"#mongo-shell\">Mongo shell</a></h4>\r\n<p>Mongo shell: <code>mongo localhost:27017</code><br /> show databases: <code>show dbs</code></p>\r\n<h2><a id=\"how-to-start-the-cms\" href=\"#how-to-start-the-cms\">How to start the CMS</a></h2>\r\n<h3><a id=\"start-keystone\" href=\"#start-keystone\">Start keystone</a></h3>\r\n<p><code>node keystone</code><br /> (default admin password is 'tournament1')</p>\r\n<h3><a id=\"viewing-the-site\" href=\"#viewing-the-site\">Viewing the site</a></h3>\r\n<p><a href=\"../../\">http://localhost:3000/</a></p>\r\n<p><strong>admin area</strong><br /> <a href=\"../\">http://localhost:3000/keystone</a></p>\r\n<h2><a id=\"development-notes\" href=\"#development-notes\">Development notes</a></h2>\r\n<p>restful-keystone<br /> <a href=\"https://github.com/d-pac/restful-keystone\">https://github.com/d-pac/restful-keystone</a></p>"},"state":"published"}),
    new Article({"_id":"5974e71f10bf112307ddd9a7","title":"Create your tournament","author":"5974b57b8f6666152b4d9803","publishedDate":null,"categories":[],"content":{"brief":"<p>Description of the home page</p>","extended":"<p style=\"margin: 0in; font-family: Calibri; font-size: 12.0pt;\"><span style=\"font-weight: bold;\">Home product overview (landing)</span></p>\r\n<p style=\"margin: 0in; font-family: Calibri; font-size: 12.0pt;\">&nbsp;</p>\r\n<p style=\"margin: 0in; font-family: Calibri; font-size: 12.0pt;\">This is rendered when the user is not logged in.</p>\r\n<p style=\"margin: 0in; font-family: Calibri; font-size: 12.0pt;\">&nbsp;</p>\r\n<p style=\"margin: 0in; font-family: Calibri; font-size: 12.0pt;\">Child pages:</p>\r\n<p><!--StartFragment--> <!--EndFragment--></p>\r\n<ul style=\"margin-left: .375in; direction: ltr; unicode-bidi: embed; margin-top: 0in; margin-bottom: 0in;\" type=\"disc\">\r\n<li style=\"margin-top: 0; margin-bottom: 0; vertical-align: middle;\"><span style=\"font-family: Calibri; font-size: 12.0pt;\">pricing options</span></li>\r\n<li style=\"margin-top: 0; margin-bottom: 0; vertical-align: middle;\"><span style=\"font-family: Calibri; font-size: 12.0pt;\">examples (images &amp; videos)</span></li>\r\n<li style=\"margin-top: 0; margin-bottom: 0; vertical-align: middle;\"><span style=\"font-family: Calibri; font-size: 12.0pt;\">get started page</span></li>\r\n</ul>"},"state":"published"})
  ];

  constructor() { }

  getArticles() {
    return this._articles;
  }


}
