import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ModalMessage, ModalService } from '../modal.service';
@Component({
  selector: 'app-test-modal',
  templateUrl: '<div>test component</div>',
  styleUrls: ['./create-modal.component.css']
})
export class TestComponent implements OnInit {
  ngOnInit() {
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
      template: this.modalContent
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
