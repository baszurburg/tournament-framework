import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home';
import {ArticleDetailComponent} from './articles/article-detail';
import {ProfileComponent} from './users';
import {CallbackComponent} from './users/auth0';

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
    loadChildren: './sandbox/sandbox.module#SandboxModule'
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
