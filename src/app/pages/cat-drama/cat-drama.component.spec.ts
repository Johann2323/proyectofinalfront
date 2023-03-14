import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDramaComponent } from './cat-drama.component';

describe('CatDramaComponent', () => {
  let component: CatDramaComponent;
  let fixture: ComponentFixture<CatDramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatDramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatDramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
