import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideAreaComponent } from './slide-area/slide-area.component';
import { ImageboxComponent } from './imagebox/imagebox.component';
import { TextboxComponent } from './textbox/textbox.component';
import { DnDimageDirective } from './dn-dimage.directive';
import { BoxHostDirective } from './box-host.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlideAreaComponent,
    ImageboxComponent,
    DnDimageDirective,
    BoxHostDirective,
    TextboxComponent
  ],
  entryComponents: [ImageboxComponent,TextboxComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
