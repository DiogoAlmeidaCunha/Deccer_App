import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterioresComponent } from './interiores.component';

describe('InterioresComponent', () => {
  let component: InterioresComponent;
  let fixture: ComponentFixture<InterioresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterioresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
