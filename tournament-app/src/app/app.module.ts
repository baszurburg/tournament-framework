/** Modules **/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/**Routing */
import { AppRoutingModule } from './app-routing.module';

/**NgRx Store */
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

/**Pipes */
import { FilterPropPipe } from './shared/pipes/filter-prop.pipe';

/**Services */
import { AuthService } from './shared/services';
import { ArticleService } from './articles';
import { UsersService } from './users/users.service';

/**Components and other imports */
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header';
import { HomeComponent } from './home';
import { ArticleListComponent, ArticleListitemComponent } from './articles/article-list';
import { ArticleDetailComponent } from './articles/article-detail';
import { CallbackComponent, ProfileComponent } from './auth0';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArticleListComponent,
    ArticleListitemComponent,
    ArticleDetailComponent,
    FilterPropPipe,
    CallbackComponent,
    ProfileComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [ArticleService, UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
