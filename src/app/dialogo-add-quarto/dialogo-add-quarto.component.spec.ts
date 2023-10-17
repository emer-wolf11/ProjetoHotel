import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoAddQuartoComponent } from './dialogo-add-quarto.component';

describe('DialogoAddQuartoComponent', () => {
  let component: DialogoAddQuartoComponent;
  let fixture: ComponentFixture<DialogoAddQuartoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogoAddQuartoComponent]
    });
    fixture = TestBed.createComponent(DialogoAddQuartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
