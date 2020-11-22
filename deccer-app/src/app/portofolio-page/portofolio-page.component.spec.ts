import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofolioPageComponent } from './portofolio-page.component';

describe('PortofolioPageComponent', () => {
  let component: PortofolioPageComponent;
  let fixture: ComponentFixture<PortofolioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortofolioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortofolioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
