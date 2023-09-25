import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPreventcopypaste]'
})
export class PreventcopypasteDirective {

  constructor() { }
  @HostListener('paste',['$event']) blockpaste(eve : KeyboardEvent,m : MouseEvent){
    eve.preventDefault();
    m.preventDefault()
  }
  @HostListener('copy',['$event']) blockcopy (eve : KeyboardEvent , m : MouseEvent){
    eve.preventDefault();
    m.preventDefault()
  }
  @HostListener('cut' , ["$event"]) blockcut (eve : KeyboardEvent, m : MouseEvent){
    eve.preventDefault();
    m.preventDefault()
  }
}
