import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTipoDocumentoIdentidadComponent } from './comp-tipo-documento-identidad.component';

describe('CompTipoDocumentoIdentidadComponent', () => {
  let component: CompTipoDocumentoIdentidadComponent;
  let fixture: ComponentFixture<CompTipoDocumentoIdentidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTipoDocumentoIdentidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTipoDocumentoIdentidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
