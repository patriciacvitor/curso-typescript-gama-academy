"use strict";
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
/* MODIFICADORES DE ACESSO:
    - valor default: se não colocar nada antes do nome da propriedade ela será pública.
    - public: propriedade pública, acessível também fora da classe.
    - private: propriedade privada, acessível apenas dentro da própria classe.
*/
var data = new Data(4, 8, 2021);
console.log(data.dia);
var data2 = new Data(1, 1);
console.log(data2);
