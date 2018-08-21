import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFindEmpleadoComponent } from './comp-find-empleado.component';

describe('CompFindEmpleadoComponent', () => {
  let component: CompFindEmpleadoComponent;
  let fixture: ComponentFixture<CompFindEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFindEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFindEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
