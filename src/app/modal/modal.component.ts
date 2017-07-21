import { Observable } from 'rxjs/Rx';
import { Dialog } from 'primeng/primeng';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  display: boolean;
  $$uuid: number;
  serviceRef: any;
  onShow: Promise<any>;
  onHide: Promise<any>;
  private _resolve: (showEvent?: any) => void;
  private _reject: (showEvent?: any) => void;
  private _resolveClose: (showEvent?: any) => void;
  private _rejectClose: (showEvent?: any) => void;
  @ViewChild(Dialog) dialogInstance;
  constructor() {
    this.onShow = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this.onHide = new Promise((resolve, reject) => {
      this._resolveClose = resolve;
      this._rejectClose = reject;
    });
  }

  ngOnInit() {
    this.display = true;
  }
  bindDialogConfig(config: any) {
    for (const key in config) {
      if (config.hasOwnProperty(key)) {
        this.dialogInstance[key] = config[key];
      }
    }

  }
  showEvent(e): void {
    this._resolve(e);
  }
  hideEvent(e): void {
    this.serviceRef.close(this);
    this._resolveClose(e);
  }
}
