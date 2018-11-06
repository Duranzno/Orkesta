export const Bancos=[
    'Desconocido',
    'Banesco',
    `Banco de Venezuela`,
    `BBVA Provincial`,
    `Banco Mercantil`,
    `BOD`,
    `Banco Bicentenario`,
    `Bancaribe`,
    `BNC`,
    `Banco del Tesoro`,
    `Bancaribe`,
    `Banco Exterior`,
    `BFC`,
    `Sofitasa`,
    `Bancrecer`,
    `Banplus`,
    `Banco Plaza`,
    `Banco Caroni`,
    `DELSUR`,
  ];
export interface Pago{
    banco:string;
    referencia:string;
    monto:number;
    fecha?:Date;
}
export class PagoImpl implements Pago{   
    banco:string;
    referencia:string;
    public monto:number;
    constructor(              
        banco:string="",
        referencia:string="",
        monto:number=0,    
        fecha?:Date,  
    ){}
}
