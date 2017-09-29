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
import { AuthService } from './users/auth0';
import { ArticleService } from './articles';
import { UsersService} from './users';

/**Dropdowns */
import { DropdownDirective } from './directives/tma-dropdown.directive';

/**Guards */
import { UserAuthenticatedGuard} from './users';



/**Components and other imports */
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header';
import { HomeComponent } from './home';
import { ArticleListComponent, ArticleListitemComponent } from './articles/article-list';
import { ArticleDetailComponent } from './articles/article-detail';
import { SettingsComponent, TournamentsComponent, ProfileComponent, ContentComponent } from './settings';
import { CallbackComponent } from './users/auth0';

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
    SettingsComponent,
    ContentComponent,
    TournamentsComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [ArticleService, UsersService, AuthService, UserAuthenticatedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
