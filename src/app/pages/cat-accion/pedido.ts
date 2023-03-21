export class pedido{
    id?:number;
    id_usuario?: number;
    nombre?: string;
    id_libro?: number;
    titulo?:Array<String>;
    precion?: Array<number>;
    fecha_pedido?: Date;
    estado?:string;
    total?:number
}