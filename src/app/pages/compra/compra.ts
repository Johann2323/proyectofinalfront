export class Compra {
    id?: number;
    fecha_compra?: Date; 
    estado?: string;
    total?: number;
    metodo_pago?: string;
    direccion?: string;
    nombre?: string;
    titulo?: Array<String>;
    precion?: Array<number>;
    id_pedido?: number;
}
