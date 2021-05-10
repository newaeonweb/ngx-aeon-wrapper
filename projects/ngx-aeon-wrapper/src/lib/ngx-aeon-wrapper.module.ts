import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './material.modules';

@NgModule({
  declarations: [NavbarComponent],
  imports: [MaterialModule],
  exports: [NavbarComponent, MaterialModule],
})
export class NgxAeonWrapperModule { }
