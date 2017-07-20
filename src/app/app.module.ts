import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ComponentFactory } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal.service';
import { CreateModalComponent } from './create-modal/create-modal.component';

import { DialogModule, SharedModule } from 'primeng/primeng';
import { ModalholderComponent } from './modalholder/modalholder.component';
//https://angular.io/guide/dynamic-component-loader
@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    CreateModalComponent,
    ModalholderComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, DialogModule, SharedModule, FormsModule
  ],
  entryComponents: [ModalComponent],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
