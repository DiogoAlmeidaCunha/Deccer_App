import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompServicoComponent } from './comp-servico.component';

describe('CompServicoComponent', () => {
  let component: CompServicoComponent;
  let fixture: ComponentFixture<CompServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
