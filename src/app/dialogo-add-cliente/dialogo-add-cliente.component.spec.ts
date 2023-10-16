import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoAddClienteComponent } from './dialogo-add-cliente.component';

describe('DialogoAddClienteComponent', () => {
  let component: DialogoAddClienteComponent;
  let fixture: ComponentFixture<DialogoAddClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogoAddClienteComponent]
    });
    fixture = TestBed.createComponent(DialogoAddClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
