export class Address {
    nome : string;
    cpf: string;
    cep: string;
    cidade: string ;
    bairro: string;
    rua: string;
    numero: string;
    

    constructor(_nome: string, _cpf:string, _cep: string, _cidade: string, _bairro: string, _rua: string, _numero: string){
        this.nome = _nome;
        this.cpf = _cpf;
        this.cep = _cep;
        this.cidade = _cidade;
        this.bairro = _bairro;
        this.rua = _rua;
        this.numero = _numero;
    }
}