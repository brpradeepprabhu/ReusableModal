import { Observable } from 'rxjs/Rx';
import { Dialog } from 'primeng/primeng';
import {
  AfterViewChecked,
  AfterViewInit,
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  ComponentFactory,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ModalDirective } from "../modal.directive";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterViewInit {
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
  @ViewChild(ModalDirective) mdlDir: ModalDirective;
  public componentHolder: ComponentFactory<any>;

  constructor(private _applicationRef: ApplicationRef, private cdr: ChangeDetectorRef) {

    this.onShow = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this.onHide = new Promise((resolve, reject) => {
      this._resolveClose = resolve;
      this._rejectClose = reject;
    });
  }
  ngAfterViewInit() {
    if (this.componentHolder) {
      this.mdlDir.viewContainerRef.createComponent(this.componentHolder);
      console.log(this._applicationRef)
      this.cdr.detectChanges();
      // this._applicationRef.attachView(this.componentHolder.);
    }
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
