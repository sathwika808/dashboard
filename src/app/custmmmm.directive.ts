import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCustmmmm]'
})
export class CustmmmmDirective {
  isHovered!: boolean;

  constructor() { }
@HostBinding("mouseenter")onHover(){
  this.isHovered=true; 
      


}
}
