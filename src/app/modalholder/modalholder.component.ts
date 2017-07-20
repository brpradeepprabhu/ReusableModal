import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ModalService, ModalMessage } from '../modal.service';
import { ModalComponent } from '../modal/modal.component';
class Guid {
  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0;
      const v = (c === 'x') ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}

@Directive({
  selector: '[holderContent]',
})
export class ModalDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Component({
  selector: 'app-modalholder',
  templateUrl: './modalholder.component.html',
  styleUrls: ['./modalholder.component.css']
})
export class ModalholderComponent implements OnInit {
  messages = [];
  currentAddIndex = -1;
  @ViewChild('holderContent') modalDir: ModalDirective;
  @ViewChild('modal') modalComponent: ComponentRef<any>;
  constructor(private modalSer: ModalService, private resolver: ComponentFactoryResolver) {
    this.modalSer.modalObservable.subscribe(function (message: ModalMessage) {
      message.$$uid = Guid.newGuid();
      console.log(message.$$uid);
      this.messages.push(message);
      console.log(message);
      const adItem = this.modalComponent;
      console.log(adItem)
      const componentFactory = this.resolver.resolveComponentFactory(adItem);
      const viewContainerRef = this.modalDir.viewContainerRef;
      viewContainerRef.clear();
      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<ModalComponent>componentRef.instance).message = message;

    }.bind(this));
  }
  close(id) {
    console.log(id);
  }
  ngOnInit() {
  }
  trackByFn(index, item) {
    return item.$$uid; // or item.id
  }
}
