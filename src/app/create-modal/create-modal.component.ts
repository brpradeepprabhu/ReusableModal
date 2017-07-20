import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ModalMessage, ModalService } from '../modal.service';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent implements OnInit {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  @ViewChild('modalContent1') modalContent2: TemplateRef<any>;
  containerConent = '';
  modelContentText = 'Passing data to content';
  constructor(private modalSer: ModalService) { }
  value = '1';
  btnClick() {
    this.modalSer.showModal({
      header: 'From Btn Click',
      template: this.modalContent
    });
    this.containerConent = 'initModal';

  }

  modalClick() {
    this.containerConent = 'update modal';
    this.modelContentText = 'createModal';
    this.modalSer.showModal({
      header: 'From second Click',
      template: this.modalContent2
    });
    this.containerConent = 'initModal';
  }
  ngOnInit() {
  }

}
