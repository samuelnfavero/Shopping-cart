import { Injectable } from '@angular/core';
import { Products } from '../model/products';
import { v4 as uuidv4 } from 'uuid';
import { PersistenceService } from 'src/app/shared/persistence.service';

@Injectable()
export class ProductsService{

  constructor(private persistenceService: PersistenceService){}

    //Passar os produtos para o productsComponent
    width: string = "100px";
    height: string = "100px";

    products: Array<any> = [
        {PRODUCT : new Products(uuidv4(), "Geladeira / Refrigerador Brastemp 375 Litros 2 Portas Frost Free Duplex BRM45HB", 
        2730,
        `<img src='..\\..\\assets\\geladeira.jpg' alt='geladeira' width='${this.width}' heigth='${this.height}'>`, 1)},
        {PRODUCT : new Products(uuidv4(), "Fogão 5 Bocas Mueller Fratello Vetro - Mueller Fogões", 
        1000,
        `<img src='..\\..\\assets\\fogao.jpg' alt='fogao' width='${this.width}' heigth='${this.height}'>`, 1)},
        {PRODUCT : new Products(uuidv4(), "Micro-ondas Consul CM020, Espelhado, 20 Litros, 110V", 
        540,
        `<img src='..\\..\\assets\\microondas.jpg' alt='microondas' width='${this.width}' heigth='${this.height}'>`, 1)},
        {PRODUCT : new Products(uuidv4(), "Smart TV 50” Crystal 4K Samsung 50AU7700 - Wi-Fi Bluetooth HDR Alexa Built in 3 HDMI 1 USB",
        2660,
        `<img src='..\\..\\assets\\televisao.jpg' alt='geladeira' width='${this.width}' heigth='${this.height}'>`, 1)},
        {PRODUCT : new Products(uuidv4(), "Fritadeira Elétrica sem Óleo/Air Fryer Nell Smart - Preta 2,4L com Timer",
        240,
        `<img src='..\\..\\assets\\airfryer.jpg' alt='geladeira' width='${this.width}' heigth='${this.height}'>`, 1)},
        {PRODUCT : new Products(uuidv4(), "Smartphone Samsung Galaxy S20 FE 128GB Cloud Mint - 4G 6GB RAM Tela 6,5” Câm. Tripla + Selfie 32MP",
        1800,
        `<img src='..\\..\\assets\\celular.jpg' alt='geladeira' width='${this.width}' heigth='${this.height}'>`, 1)},
        {PRODUCT : new Products(uuidv4(), "Liquidificador Mondial Turbo L-900 FB Copo - Preto Com Filtro 05 Velocidades 900W",
        266,
        `<img src='..\\..\\assets\\liquidificador.jpg' alt='geladeira' width='${this.width}' heigth='${this.height}'>`, 1)},
        {PRODUCT : new Products(uuidv4(), "Sofá Retrátil Reclinável 3 Lugares Suede - Phormatta Evolution SMP",
        900 ,
        `<img src='..\\..\\assets\\sofa.jpg' alt='geladeira' width='${this.width}' heigth='${this.height}'>`, 1)},
        {PRODUCT : new Products(uuidv4(), "Máquina de Lavar Consul 12kg Dosagem Extra Econômica e Ciclo Edredom - CWH12AB",
        1500,
        `<img src='..\\..\\assets\\maquinadelavar.jpg' alt='geladeira' width='${this.width}' heigth='${this.height}'>`, 1)},
        {PRODUCT : new Products(uuidv4(), "Notebook Samsung Book NP550XDA-KF2BR Intel Core i5 - 8GB 256GB SSD 15,6” Full HD Windows 10",
        2930,
        `<img src='..\\..\\assets\\notebook.jpg' alt='geladeira' width='${this.width}' heigth='${this.height}'>`, 1)},
        {PRODUCT : new Products(uuidv4(), "Purificador de água Electrolux - Gelada, Fria e Natural Elétrico Compacto Pure 4x Branco (PE12B)",
        520,
        `<img src='..\\..\\assets\\purificador.jpg' alt='geladeira' width='${this.width}' heigth='${this.height}'>`, 1)},
        {PRODUCT : new Products(uuidv4(), "Ventilador de Mesa e Parede Ultra V-30B-6P - 30cm 3 Velocidades",
        80 ,
        `<img src='..\\..\\assets\\ventilador.jpg' alt='geladeira' width='${this.width}' heigth='${this.height}'>`, 1)},
      ]

      getProducts(){
          return this.products;
      }

      //Passar os produtos a serem adicionados no carrinho para o cartComponent

      shoppingCart: Array<any> = this.persistenceService.loadFromLocalStorage("shoppingCart");
      totalPrice: number = parseInt(JSON.parse(localStorage.getItem("totalPrice") ?? '0'));

      addProduct(_id:string, _name: string, _price: number, _image: string, _numberOfProducts: number){
        let product = {
            id: _id,
            name: _name,
            price: _price,
            image: _image,
            numberOfProducts: _numberOfProducts
          } 
  
          this.persistenceService.addToLocalStorage(product, "shoppingCart", product.id)
          this.shoppingCart = this.persistenceService.loadFromLocalStorage("shoppingCart");
          this.totalPrice = parseInt(JSON.parse(localStorage.getItem("totalPrice") ?? '0'))
          this.totalPrice += product.price;
          localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice))
      }

      //Remover item do carrinho

      removeProduct(product: any, price: number, numOfProducts: number){
        this.shoppingCart = this.shoppingCart.filter(p => p.id != product.id)
        localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart))
        this.totalPrice = parseInt(JSON.parse(localStorage.getItem("totalPrice") ?? '0'))
        this.totalPrice -= numOfProducts * price;
        localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice))
      }

      removeOneProduct(id: string, price: number, numOfProd: number){
        if(numOfProd > 1){
          //item
          this.shoppingCart = this.persistenceService.loadFromLocalStorage("shoppingCart")
          this.shoppingCart.find((p: { id: string; }) => p.id == id).numberOfProducts -=1
          localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart))
          //valor
          this.totalPrice = parseInt(JSON.parse(localStorage.getItem("totalPrice") ?? '0'))
          this.totalPrice -= price;
         localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice))
        }
        

      }

      //Limpar Carrinho

      cleanCart(){
        this.persistenceService.clearLocalStorage()
        this.totalPrice = 0;
      }
    
      //Carregar um item do carrinho pelo id

      loadProduct = (id:string)  => this.products.find(p => p.PRODUCT.id == id)
      
}