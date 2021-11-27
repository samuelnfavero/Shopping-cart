import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShCartModalComponent } from './sh-cart-modal.component';

describe('ShCartModalComponent', () => {
  let component: ShCartModalComponent;
  let fixture: ComponentFixture<ShCartModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShCartModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShCartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
