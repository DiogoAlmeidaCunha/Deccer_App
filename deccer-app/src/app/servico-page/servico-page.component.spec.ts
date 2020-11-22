import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoPageComponent } from './servico-page.component';

describe('ServicoPageComponent', () => {
  let component: ServicoPageComponent;
  let fixture: ComponentFixture<ServicoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
