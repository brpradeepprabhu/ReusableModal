import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/observable';

export interface ModalMessage {
  header: string;
  template: any;
  $$uid?: any;
}
@Injectable()
export class ModalService {
  private ModalSubject = new Subject<ModalMessage>();
  modalObservable = this.ModalSubject.asObservable();
  constructor() { }
  showModal(message: ModalMessage) {
    this.ModalSubject.next(message);
  }

}
