import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFindCodigoBarraComponent } from './comp-find-codigo-barra.component';

describe('CompFindCodigoBarraComponent', () => {
  let component: CompFindCodigoBarraComponent;
  let fixture: ComponentFixture<CompFindCodigoBarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFindCodigoBarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFindCodigoBarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
