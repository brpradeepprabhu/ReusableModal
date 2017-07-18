import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { ModalService, ModalMessage } from '../modal.service';
import { DialogModule } from 'primeng/primeng';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  headerContent = 'default';
  display = false;
  @ViewChild('modalContent', { read: ViewContainerRef }) _vcr;
  constructor(private modalSer: ModalService, private containerRef: ViewContainerRef) {
    this.modalSer.modalObservable.subscribe(function (message: ModalMessage) {
      this.headerContent = message.header;
      this._vcr.clear();
      this._vcr.createEmbeddedView(message.template);
      this.display = true;
    }.bind(this));
  }

  ngOnInit() {
  }

}
