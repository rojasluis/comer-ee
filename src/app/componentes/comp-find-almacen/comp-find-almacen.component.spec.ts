import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFindAlmacenComponent } from './comp-find-almacen.component';

describe('CompFindAlmacenComponent', () => {
  let component: CompFindAlmacenComponent;
  let fixture: ComponentFixture<CompFindAlmacenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFindAlmacenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFindAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
