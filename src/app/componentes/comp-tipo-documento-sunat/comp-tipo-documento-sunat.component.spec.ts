import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTipoDocumentoSunatComponent } from './comp-tipo-documento-sunat.component';

describe('CompTipoDocumentoSunatComponent', () => {
  let component: CompTipoDocumentoSunatComponent;
  let fixture: ComponentFixture<CompTipoDocumentoSunatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTipoDocumentoSunatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTipoDocumentoSunatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
