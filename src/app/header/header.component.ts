import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
  }

  openModal(): void{
    const _modal = this.element.nativeElement.querySelector('.modal')
    const _button = this.element.nativeElement.querySelector('img')
    if(_modal.classList.contains('-is--open')){
      _modal.classList.remove('-is--open')
      _button.style.backgroundColor = '';
    }else{
    _modal.classList.add('-is--open')
    _button.style.backgroundColor = 'rgb(177, 47, 8)';
    }
  }

}
