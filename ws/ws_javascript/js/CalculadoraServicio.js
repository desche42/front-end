// ############ DECLARACIÓN DE UNA CLASE (Mediante su constructor) ######
function CalculadoraServicio(txta,txtb,operacion){
    // ------- Inicialización de atributos -----------
    this.txta = txta;
    this.txtb = txtb;
    this.operacion = operacion;
    this.resultado = undefined;
    this.operaciones = [
        {valor:"+",texto:"sumar"},
        {valor:"-",texto:"restar"},
        {valor:"x",texto:"mult."},
        {valor:"/",texto:"div"}
    ];
    // -------- Métodos --------------------------------
    this.calcular = function(){
        var a = parseFloat(this.txta);
        var b = parseFloat(this.txtb);
        if(this.operacion=="+"){
            this.resultado = a + b;
        } else if(this.operacion=="-"){
            this.resultado = a - b;
        } else if(this.operacion=="x"){
            this.resultado = a * b;
        } else if(this.operacion=="/"){
            this.resultado = a / b;
        }
    }
    this.isNaN = isNaN;
}