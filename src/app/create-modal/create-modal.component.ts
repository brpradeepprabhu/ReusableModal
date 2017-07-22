import { NgModel } from '@angular/forms/src/directives';

import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ModalMessage, ModalService } from '../modal.service';

@Component({
  selector: 'app-test-modal',
  template: `<div>test component
  <input type="text" [(ngModel)]="value">
  <button (click)="btnClick1()">Create Modal</button><ng-template #modalContent1>
    <div>second static template</div>
  </ng-template></div>`,
  styleUrls: ['./create-modal.component.css']
})
export class TestComponent implements OnInit {
  value = 'pradeep';
  dialogRef;
  @ViewChild('modalContent1') modalContent: TemplateRef<any>;
  ngOnInit() {
  }
  constructor(private modalSer: ModalService) { }
  btnClick1() {
    this.dialogRef = this.modalSer.createModal({
      config: { header: 'From Template', modal: true },
      template: this.modalContent
    });
    this.dialogRef.onShow.then(function (e) {
      console.log('dialog is showing');
    });
    this.dialogRef.onHide.then(function (e) {
      console.log('dialog is hiding');
    });

  }
}
@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent implements OnInit {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  @ViewChild('modalContent1') modalContent2: TemplateRef<any>;

  modelContentText = 'Passing data to content';
  constructor(private modalSer: ModalService) { }
  value = '1';
  dialogRef;
  btnClick() {
    this.dialogRef = this.modalSer.createModal({
      config: { header: 'From Btn Click', modal: true },
      template: TestComponent
    });
    this.dialogRef.onShow.then(function (e) {
      console.log('dialog is showing');
    });
    this.dialogRef.onHide.then(function (e) {
      console.log('dialog is hiding');
    });

  }
  closeClick() {
    this.modalSer.close(this.dialogRef);
  }
  modalClick() {
    this.modelContentText = 'createModal';
    this.modalSer.createModal({
      config: { header: 'From second Click' },
      template: this.modalContent2
    });
  }
  ngOnInit() {
  }

}
