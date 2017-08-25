import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home';
import {SandboxComponent} from './sandbox';
import {ArticleDetailComponent} from './articles/article-detail';
import {ProfileComponent, CallbackComponent} from './auth0';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sandbox',
    component: SandboxComponent
  },
  {
    path: 'article/:id',
    component: ArticleDetailComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
