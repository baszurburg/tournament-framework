import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Modules and the rest
import { SandboxComponent, SANDBOX_ROUTING } from './';
import { Cmp1Component, Cmp2Component, Cmp3Component, Cmp4Component } from './cmps';

@NgModule({
  declarations: [
    SandboxComponent,
    Cmp1Component,
    Cmp2Component,
    Cmp3Component,
    Cmp4Component],
  imports: [CommonModule, SANDBOX_ROUTING]
})

export class SandboxModule {}
