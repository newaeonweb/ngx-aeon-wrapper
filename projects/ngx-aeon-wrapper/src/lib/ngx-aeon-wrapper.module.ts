import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule],
  exports: [NavbarComponent],
})
export class NgxAeonWrapperModule {}
