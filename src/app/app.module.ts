import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal.service';
import { CreateModalComponent } from './create-modal/create-modal.component';

import { DialogModule, SharedModule } from 'primeng/primeng';
@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    CreateModalComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, DialogModule, SharedModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
