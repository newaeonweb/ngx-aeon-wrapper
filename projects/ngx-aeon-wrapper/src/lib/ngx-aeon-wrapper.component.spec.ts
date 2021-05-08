import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAeonWrapperComponent } from './ngx-aeon-wrapper.component';

describe('NgxAeonWrapperComponent', () => {
  let component: NgxAeonWrapperComponent;
  let fixture: ComponentFixture<NgxAeonWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAeonWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAeonWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
