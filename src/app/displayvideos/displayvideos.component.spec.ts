import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayvideosComponent } from './displayvideos.component';

describe('DisplayvideosComponent', () => {
  let component: DisplayvideosComponent;
  let fixture: ComponentFixture<DisplayvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayvideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
