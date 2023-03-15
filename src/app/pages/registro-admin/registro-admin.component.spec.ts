import { ComponentFixture, TestBed } from '@angular/core/testing';
import { usuario } from '../registro-cliente/usuario';

import { RegistroAdminComponent } from './registro-admin.component';

describe('RegistroAdminComponent', () => {
  let component: RegistroAdminComponent;
  let fixture: ComponentFixture<RegistroAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
