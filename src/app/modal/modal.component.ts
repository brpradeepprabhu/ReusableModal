
import { AfterContentChecked, Component, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService, ModalMessage } from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements AfterContentChecked {
  headerContent = 'default';
  @Input() message;
  @Input() uid;

  @Output() closeEvent = new EventEmitter<any>();
  display = false;
  @ViewChild('modalContent', { read: ViewContainerRef }) _vcr;
  constructor(private modalSer: ModalService, private containerRef: ViewContainerRef) {

  }

  ngAfterContentChecked() {
    if (this.message !== undefined) {
      this.headerContent = this.message.header;

    }
  }
  closeBtn() {
    console.log("uid", this.uid)
    this.closeEvent.emit(this.uid);
  }

}
