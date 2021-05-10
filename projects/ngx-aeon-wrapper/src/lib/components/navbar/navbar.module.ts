import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material.modules';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [MaterialModule],
  exports: [],
})
export class NavbarModule {}
