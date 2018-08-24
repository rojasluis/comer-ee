import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFindProveedorClienteComponent } from './comp-find-proveedor-cliente.component';

describe('CompFindProveedorClienteComponent', () => {
  let component: CompFindProveedorClienteComponent;
  let fixture: ComponentFixture<CompFindProveedorClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFindProveedorClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFindProveedorClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
