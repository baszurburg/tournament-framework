import {Routes} from '@angular/router';
import {TournamentsComponent, ProfileComponent, ContentComponent} from './';
import {UserAuthenticatedGuard} from '../users';

export const SETTINGS_ROUTES: Routes = [
  {path: '', redirectTo: 'tournaments', pathMatch: 'full'},
  {path: 'tournaments', component: TournamentsComponent, canActivate: [UserAuthenticatedGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [UserAuthenticatedGuard]},
  {path: 'content', component: ContentComponent, canActivate: [UserAuthenticatedGuard]}
];
