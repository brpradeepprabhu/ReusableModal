import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ModalMessage, ModalService } from '../modal.service';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent implements OnInit {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  containerConent = '';
  modelContentText = 'Passing data to content';
  constructor(private modalSer: ModalService) { }
  btnClick() {
    this.modalSer.showModal({
      header: 'From Btn Click',
      template: this.modalContent
    });
    this.containerConent = 'initModal';

  }

  modalClick() {
    this.containerConent = 'update modal';
    setTimeout(function () {
      this.modelContentText = "updated after timeout";
    }.bind(this), 1000);
  }
  ngOnInit() {
  }

}
