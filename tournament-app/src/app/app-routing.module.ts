import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home';
import {ArticleDetailComponent} from './articles/article-detail';
import {CallbackComponent} from './users/auth0';
import {UserAuthenticatedGuard} from './users';
import {SettingsComponent, ProfileComponent} from './settings';
import {SETTINGS_ROUTES} from './settings/settings.routes';

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
    path: 'settings',
    component: SettingsComponent,
    canActivate: [UserAuthenticatedGuard],
    children: SETTINGS_ROUTES

  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [UserAuthenticatedGuard]
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
