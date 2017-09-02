import {RouterModule, Routes} from '@angular/router';
import {SandboxComponent} from './';

const ROUTER_DATA: Routes = [
  { path:'', component: SandboxComponent }
];
export const SANDBOX_ROUTING = RouterModule.forChild(ROUTER_DATA);
