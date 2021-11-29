import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor() { }
  addToLocalStorage(product: Object, key: string, id: string ){
    let productsList = JSON.parse(localStorage.getItem(key) ?? "[]")
    const _BOLL = productsList.some((prod: { id: string; }) => prod.id == id) 
    if(_BOLL){
      productsList.find((p: { id: string; }) => p.id == id).numberOfProducts += 1
      localStorage.setItem(key, JSON.stringify(productsList))  
      console.log(productsList)
    }else{
      productsList.push(product)
      localStorage.setItem(key, JSON.stringify(productsList))
    }
    
  }

  loadFromLocalStorage(key: string){
    return JSON.parse(localStorage.getItem(key) ?? "[]")
  }

  clearLocalStorage(){
    localStorage.clear()
  }


  
}
