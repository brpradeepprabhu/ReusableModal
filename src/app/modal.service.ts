
import {
  AfterViewInit,
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  Injectable,
  ViewContainerRef,
} from '@angular/core';

import { ModalComponent } from '../app/modal/modal.component';
import { Dialog } from 'primeng/primeng';

export interface ModalMessage {
  config?: any;
  template: any;
}
@Injectable()
export class ModalService {
  private modalCounter = 0;
  private modalComponent: ComponentFactory<ModalComponent>;
  private modalStack = [];

  constructor(private _applicationRef: ApplicationRef,
    private _injector: Injector, private componentFactoryResolver: ComponentFactoryResolver) { }

  createModal(message: ModalMessage) {

    this.modalComponent = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    let modalCompRef: ComponentRef<ModalComponent>;
    const templateContentView = message.template.createEmbeddedView();
    this._applicationRef.attachView(templateContentView);
    modalCompRef = this.modalComponent.create(this._injector, [templateContentView.rootNodes]);
    this._applicationRef.attachView(modalCompRef.hostView);
    modalCompRef.instance.bindDialogConfig(message.config);
    modalCompRef.instance.$$uuid = this.modalCounter;
    this.modalCounter++;
    modalCompRef.instance.serviceRef = this;
    document.body.appendChild(modalCompRef.location.nativeElement);
    this.modalStack.push(modalCompRef);
    console.log(this.modalStack.length)
    return modalCompRef.instance;
  }
  close(modalRef: ModalComponent) {
    for (let i = 0; i < this.modalStack.length; i++) {
      if (this.modalStack[i].instance.$$uuid === modalRef.$$uuid) {
        this.modalStack[i].destroy();
        this.modalStack.splice(i, 1);
        console.log("destory", i, this.modalStack.length, modalRef.$$uuid);
        break;
      }
    }
  }
  closeAll() {
    for (let i = 0; i < this.modalStack.length; i++) {
      this.modalStack[i].destroy();
    }
    this.modalStack = [];
  }
}
