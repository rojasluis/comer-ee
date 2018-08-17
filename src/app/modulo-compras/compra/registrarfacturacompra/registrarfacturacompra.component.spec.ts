import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarfacturacompraComponent } from './registrarfacturacompra.component';

describe('RegistrarfacturacompraComponent', () => {
  let component: RegistrarfacturacompraComponent;
  let fixture: ComponentFixture<RegistrarfacturacompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarfacturacompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarfacturacompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
