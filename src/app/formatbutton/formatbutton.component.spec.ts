import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatbuttonComponent } from './formatbutton.component';

describe('FormatbuttonComponent', () => {
  let component: FormatbuttonComponent;
  let fixture: ComponentFixture<FormatbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
