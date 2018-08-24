import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFindProductoComponent } from './comp-find-producto.component';

describe('CompFindProductoComponent', () => {
  let component: CompFindProductoComponent;
  let fixture: ComponentFixture<CompFindProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFindProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFindProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
