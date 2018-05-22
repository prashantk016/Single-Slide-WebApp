import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'imagebox',
  templateUrl: './imagebox.component.html',
  styleUrls: ['./imagebox.component.scss']
})
export class ImageboxComponent implements OnInit {


  static zValue:number=0;
  //src of the image
  url:string;
  mousePosition;
  offset = [0,0];
  isDown = false;
  @Input()_ref:any;
  
  constructor() {
    this.url='../assets/images/upload.svg';  
   }

  ngOnInit() {
  }

  ngOnDestroy(){}

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
    while(box.classList[0]!="imagebox-div")
      box=box.parentNode;
    box.style.zIndex=ImageboxComponent.zValue++;
  }
  
  /**
   * called when file is dropped 
   * reads the file in fileList using FileReader and update variable url
   * @param fileList array of files selected
   */
  onFilesChange(fileList : Array<File>){

    var reader = new FileReader();
    //read file as data url
    reader.readAsDataURL(fileList[0]);
    //called once readAsDataURL is completed 
    reader.onload = (event:any) => { 
      this.url = event.target.result;
    }
  }

  /**
   * click the input tag to open dialog box
   * @param event 
   */
  selectImage(event){
    //get the parent of the event
    let p=event.target.parentNode.parentNode.parentNode;
    //get the input element
    let i=p.getElementsByTagName("input");
    //click the element to open file dialog box
    i[0].click();
  }

  /**
   * called when a image is selected using file dialog box
   * @param event 
   */
  onSelectFile(event) {
     //called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      //read file as data url
      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (event:any) => { 
        //called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
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
  while(box.classList[0]!="imagebox-div")
    box=box.parentNode;
  //bring the element to front
  box.style.zIndex=ImageboxComponent.zValue++;
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
      while(box.classList[0]!="imagebox-div")
        box=box.parentNode;
      //bring the element to front
      box.style.zIndex=ImageboxComponent.zValue++;
      //calc and update offset
      box.style.left = (mousePosition.x + this.offset[0]) + 'px';
      box.style.top  = (mousePosition.y + this.offset[1]) + 'px';
      }
  }
}
