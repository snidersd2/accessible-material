import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageComponent } from './contact-us.component';

describe('SecondPageComponent', () => {
  let component: SecondPageComponent;
  let fixture: ComponentFixture<SecondPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
