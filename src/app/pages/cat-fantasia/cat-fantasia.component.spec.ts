import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFantasiaComponent } from './cat-fantasia.component';

describe('CatFantasiaComponent', () => {
  let component: CatFantasiaComponent;
  let fixture: ComponentFixture<CatFantasiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatFantasiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatFantasiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
