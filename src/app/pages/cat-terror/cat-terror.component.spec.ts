import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatTerrorComponent } from './cat-terror.component';

describe('CatTerrorComponent', () => {
  let component: CatTerrorComponent;
  let fixture: ComponentFixture<CatTerrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatTerrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatTerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
