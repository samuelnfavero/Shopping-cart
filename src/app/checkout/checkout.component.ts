import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from '../model/address';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  address: Address=new Address('', '', '', '', '', '', '');

  editAddress: FormGroup;


  constructor(private router: Router) { 
    this.editAddress = new FormGroup({
    'nome': new FormControl(this.address.nome),
    'cpf': new FormControl(this.address.cpf),
    'cep': new FormControl(this.address.cep),
    'cidade': new FormControl(this.address.cidade),
    'bairro': new FormControl(this.address.bairro),
    'rua': new FormControl(this.address.rua),
    'numero': new FormControl(this.address.numero)
    })
  }

  submit(): void{
    const nome = this.editAddress.get('nome')?.value
    const cpf = this.editAddress.get('cpf')?.value
    const cep = this.editAddress.get('cep')?.value
    const cidade = this.editAddress.get('cidade')?.value
    const bairro = this.editAddress.get('bairro')?.value
    const rua = this.editAddress.get('rua')?.value
    const numero = this.editAddress.get('numero')?.value

    const addressObj = {nome, cpf,cep,cidade,bairro,rua,numero}
    console.log(addressObj)

    const submitAdress = localStorage.setItem('Endereço',JSON.stringify(addressObj))
    
    alert("Compra Finalizada")
    this.router.navigate([''])
    setTimeout(() =>localStorage.clear(), 2000 )
    
  }

  ngOnInit(): void {
  }

}
