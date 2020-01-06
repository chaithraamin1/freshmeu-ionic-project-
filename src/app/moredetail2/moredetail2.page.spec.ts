import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Moredetail2Page } from './moredetail2.page';

describe('Moredetail2Page', () => {
  let component: Moredetail2Page;
  let fixture: ComponentFixture<Moredetail2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Moredetail2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Moredetail2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
