import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './material.modules';

@NgModule({
  declarations: [NavbarComponent],
  imports: [BrowserAnimationsModule, MaterialModule],
  exports: [NavbarComponent, MaterialModule],
})
export class NgxAeonWrapperModule {}
