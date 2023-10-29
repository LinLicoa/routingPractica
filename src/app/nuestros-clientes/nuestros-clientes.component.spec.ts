import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosClientesComponent } from './nuestros-clientes.component';

describe('NuestrosClientesComponent', () => {
  let component: NuestrosClientesComponent;
  let fixture: ComponentFixture<NuestrosClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuestrosClientesComponent]
    });
    fixture = TestBed.createComponent(NuestrosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
