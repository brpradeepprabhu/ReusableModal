import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ComponentFactory } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ModalService } from './modal.service';
import { CreateModalComponent, TestComponent } from './create-modal/create-modal.component';
import { DialogModule, SharedModule } from 'primeng/primeng';
import { ModalComponent } from './modal/modal.component';
import { ModalDirective } from './modal.directive';
// https://angular.io/guide/dynamic-component-loader
@NgModule({
  declarations: [
    AppComponent,
    CreateModalComponent,
    TestComponent,
    ModalComponent,
    ModalDirective
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, DialogModule, SharedModule, FormsModule
  ],
  entryComponents: [ModalComponent, TestComponent],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
