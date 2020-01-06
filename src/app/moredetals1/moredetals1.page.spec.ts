import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Moredetals1Page } from './moredetals1.page';

describe('Moredetals1Page', () => {
  let component: Moredetals1Page;
  let fixture: ComponentFixture<Moredetals1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Moredetals1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Moredetals1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
