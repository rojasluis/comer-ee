import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoGridComponent } from './empleado-grid.component';

describe('EmpleadoGridComponent', () => {
  let component: EmpleadoGridComponent;
  let fixture: ComponentFixture<EmpleadoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
