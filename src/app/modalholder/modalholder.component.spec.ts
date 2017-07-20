import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalholderComponent } from './modalholder.component';

describe('ModalholderComponent', () => {
  let component: ModalholderComponent;
  let fixture: ComponentFixture<ModalholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
