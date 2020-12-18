import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingstockComponent } from './closingstock.component';

describe('ClosingstockComponent', () => {
  let component: ClosingstockComponent;
  let fixture: ComponentFixture<ClosingstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosingstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosingstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
