import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSuspensoComponent } from './cat-suspenso.component';

describe('CatSuspensoComponent', () => {
  let component: CatSuspensoComponent;
  let fixture: ComponentFixture<CatSuspensoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatSuspensoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatSuspensoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
