import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[BoxHost]'
})
export class BoxHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
