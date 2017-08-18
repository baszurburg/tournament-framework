import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header';
import { HomeComponent } from './home';
import { SandboxComponent } from './sandbox';
import { ArticleService } from './articles';
import { ArticleListComponent, ArticleListitemComponent } from './articles/article-list';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SandboxComponent,
    ArticleListComponent,
    ArticleListitemComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
