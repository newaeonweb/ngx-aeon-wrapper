import { Component, Input } from '@angular/core';

@Component({
  selector: 'cw-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() public appTitle: string | undefined;
  constructor() {}
}
