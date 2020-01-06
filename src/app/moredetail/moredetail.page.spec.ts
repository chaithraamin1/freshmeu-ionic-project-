import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoredetailPage } from './moredetail.page';

describe('MoredetailPage', () => {
  let component: MoredetailPage;
  let fixture: ComponentFixture<MoredetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoredetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoredetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
