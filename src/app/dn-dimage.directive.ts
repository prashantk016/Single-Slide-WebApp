import {Directive, HostListener, HostBinding, EventEmitter, Output, Input} from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

@Directive({
  selector: '[DnDimage]'
})
export class DnDimageDirective {

  @HostBinding('style.opacity') private opacity = '1';
  @Output() private filesChangeEmiter : EventEmitter<File[]> = new EventEmitter();
  
  constructor() { }

  @HostListener('dragover', ['$event']) public onDragOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.opacity='0.5';
    console.log("inside DragOver");
  }
  @HostListener('dragleave', ['$event']) public onDragLeave(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.opacity='1';
    console.log("inside DragLeave");
  }
  @HostListener('drop', ['$event']) public onDrop(evt){
    evt.preventDefault();
    evt.stopPropagation();
   this.opacity='1';
    let files = evt.dataTransfer.files;
    
    if(files.length > 0){
      this.filesChangeEmiter.emit(files);
    }
    console.log("inside Drop");
  }
}
