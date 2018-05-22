import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {

  static zValue:number=0;

  mousePosition;
  offset = [0,0];
  isDown = false;
  @Input()_ref:any;

  constructor() {
   
   }

  ngOnInit() {
  }
  
  /**
   * delete the component from DOM
   */
  close_box(){
    this._ref.destroy();
   }
   
   /**
   * brings the object to front
   * @param event 
   */
  change_focus(event){
    let box=event.target;
    while(box.classList[0]!="textbox-div")
      box=box.parentNode;
    box.style.zIndex=TextboxComponent.zValue++;
  }

  /**
  * onMouseDown, onMouseUp,onMouseMove 
  * moves the box around
  */
  onMouseDown(event){
    event.preventDefault();
    event.stopPropagation();
  
    this.isDown = true;
    let box=event.target;
    //get the imagebox-div
    while(box.classList[0]!="textbox-div")
      box=box.parentNode;
    //bring the element to front
    box.style.zIndex=TextboxComponent.zValue++;
    //calc and update offset
    this.offset = [
        box.offsetLeft - event.clientX,
        box.offsetTop - event.clientY
    ];
       
    }
    
  onMouseUp(event){
    this.isDown = false;  
  }
    
    /**
    * called when the mouse is moved
    * @param event 
    */
  onMouseMove(event) {
    event.preventDefault();
    if (this.isDown) {
        //only if mouse is down
        let mousePosition = {
            x : event.clientX,
            y : event.clientY
        };
        let box=event.target;
         //get the imagebox-div
        while(box.classList[0]!="textbox-div")
          box=box.parentNode;
        //calc and update offset
        box.style.left = (mousePosition.x + this.offset[0]) + 'px';
        box.style.top  = (mousePosition.y + this.offset[1]) + 'px';
        
    }
  }

}