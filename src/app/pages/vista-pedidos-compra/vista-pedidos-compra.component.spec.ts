import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPedidosCompraComponent } from './vista-pedidos-compra.component';

describe('VistaPedidosCompraComponent', () => {
  let component: VistaPedidosCompraComponent;
  let fixture: ComponentFixture<VistaPedidosCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPedidosCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaPedidosCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
