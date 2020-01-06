import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoredetailsPage } from './moredetails.page';

describe('MoredetailsPage', () => {
  let component: MoredetailsPage;
  let fixture: ComponentFixture<MoredetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoredetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoredetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
