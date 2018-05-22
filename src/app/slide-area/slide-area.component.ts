import { Component, OnInit,ViewChild,ComponentFactoryResolver } from '@angular/core';
import { ImageboxComponent } from '../imagebox/imagebox.component';
import { TextboxComponent } from '../textbox/textbox.component';
import {BoxHostDirective} from '../box-host.directive';
@Component({
  selector: 'slide-area',
  templateUrl: './slide-area.component.html',
  styleUrls: ['./slide-area.component.scss'],
  host: {'id': 'slide-area'},
})
export class SlideAreaComponent implements OnInit {

  //boxhost directive object
  @ViewChild(BoxHostDirective) boxHost: BoxHostDirective;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
  }

  /**
   * adds a new ImageBoxComponent to the slide-area
   */
  createImageBox(){
    //get ImageboxComponent factory using componentFactoryResolver
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ImageboxComponent);
    //get reference of host 
    let viewContainerRef = this.boxHost.viewContainerRef;
    //add a new ImageboxComponent 
    let componentRef:any = viewContainerRef.createComponent(componentFactory);
    componentRef.instance._ref=componentRef;
    console.log("createImageBox called");
  }
  
  /**
   * adds a new TextBoxComponent to the slide-area
   */
  createTextBox(){
    //get TextboxComponent factory using componentFactoryResolver
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(TextboxComponent);
    //get reference of host 
    let viewContainerRef = this.boxHost.viewContainerRef;
    //add a new TextboxComponent 
    let componentRef:any = viewContainerRef.createComponent(componentFactory);
    componentRef.instance._ref=componentRef;
    console.log("createTextBox called");
  }

}
