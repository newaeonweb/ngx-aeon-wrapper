import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cw-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() public appTitle: string | undefined;
  constructor() {}

  ngOnInit(): void {}
}
