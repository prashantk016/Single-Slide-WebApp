import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import{SlideAreaComponent} from '../slide-area/slide-area.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  
  @Input() slideAreaComponent: SlideAreaComponent;

  constructor() { }

  ngOnInit() {
  }

  /**
   * called add textbox button is dragged
   * @param event 
   */
  dragstart_handler_text(event){
    //set data text as textbox
    event.dataTransfer.setData("text/plain","textbox" );
    event.dataTransfer.dropEffect = "link";
  }
  /**
   * called add imagebox button is dragged
   * @param event 
   */
  dragstart_handler_image(event){
    //set data text as imagebox
    event.dataTransfer.setData("text/plain","imagebox" );
    event.dataTransfer.dropEffect = "link";
  }
}
