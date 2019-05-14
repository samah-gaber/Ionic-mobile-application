import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavNewsPage } from './fav-news.page';

describe('FavNewsPage', () => {
  let component: FavNewsPage;
  let fixture: ComponentFixture<FavNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
