import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalizacoesComponent } from './canalizacoes.component';

describe('CanalizacoesComponent', () => {
  let component: CanalizacoesComponent;
  let fixture: ComponentFixture<CanalizacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanalizacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanalizacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
