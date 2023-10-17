import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../dialogo-add-cliente/dialogo-add-cliente.component';

@Component({
  selector: 'app-dialogo-add-quarto',
  templateUrl: './dialogo-add-quarto.component.html',
  styleUrls: ['./dialogo-add-quarto.component.css']
})
export class DialogoAddQuartoComponent {
  quartoForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder, public dialogRef: MatDialogRef<DialogoAddQuartoComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData,

  ) {
    this.quartoForm = this.formBuilder.group({
      numero: ['', Validators.required],
      andar: ['', Validators.required],
      valor: ['', Validators.required],
    })
  }

  onNoClick(): void {

  }

  fecharDialog() {
    this.dialogRef.close();
  }

  salvarQuarto(){
    console.log(this.quartoForm.value)
    this.fecharDialog();
  }
}
