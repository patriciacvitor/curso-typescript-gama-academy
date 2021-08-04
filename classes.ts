class Data {
    public dia: number;
    mes: number;
    ano: number;

    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

/* MODIFICADORES DE ACESSO:
    - valor default: se não colocar nada antes do nome da propriedade ela será pública.
    - public: propriedade pública, acessível também fora da classe.
    - private: propriedade privada, acessível apenas dentro da própria classe.
*/

const data = new Data(4, 8, 2021);
console.log(data.dia);
console.log(data.mes);