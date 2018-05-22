import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @ViewChild('slideArea') slideArea;

  /**
   * called when element is being dragged over
   * @param event dragover event
   */
  dragover_handler(event) {
  event.preventDefault();
  // Set the dropEffect to move
  event.dataTransfer.dropEffect = "move";
  console.log("inside dragover");
  }

  /**
   * called when element has been dropped
   * @param event
   */
  drop_handler(event) {
  event.preventDefault();
  //get data text from dataTransfer
  let data = event.dataTransfer.getData("text");
  //if data is textbox add textboxComponent
  if(data=="textbox")
    this.slideArea.createTextBox();
  //else add a imageboxComponent
  else
    this.slideArea.createImageBox();
  console.log("inside drop");
  }

}
