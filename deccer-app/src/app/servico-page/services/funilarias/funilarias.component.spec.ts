import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunilariasComponent } from './funilarias.component';

describe('FunilariasComponent', () => {
  let component: FunilariasComponent;
  let fixture: ComponentFixture<FunilariasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunilariasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunilariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
