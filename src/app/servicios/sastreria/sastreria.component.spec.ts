import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SastreriaComponent } from './sastreria.component';

describe('SastreriaComponent', () => {
  let component: SastreriaComponent;
  let fixture: ComponentFixture<SastreriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SastreriaComponent]
    });
    fixture = TestBed.createComponent(SastreriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
