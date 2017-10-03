import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Modules and the rest
import { SandboxComponent, SANDBOX_ROUTING } from './';
import { KeysComponent} from './keys/keys.component';

@NgModule({
  declarations: [
    SandboxComponent,
    KeysComponent],
  imports: [CommonModule, SANDBOX_ROUTING]
})

export class SandboxModule {}
