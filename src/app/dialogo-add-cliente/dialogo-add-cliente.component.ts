import { Component, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


export interface DialogData {
  nome: String;
  cpf: String;
  rg: String;
  email: String;
  telefone: String;
}


@Component({
  selector: 'app-dialogo-add-cliente',
  templateUrl: './dialogo-add-cliente.component.html',
  styleUrls: ['./dialogo-add-cliente.component.css'],
})
export class DialogoAddClienteComponent {

  clienteForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder, public dialogRef: MatDialogRef<DialogoAddClienteComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData,

  ) {
    this.clienteForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  onNoClick(): void {

  }

  fecharDialog() {
    this.dialogRef.close();
  }

  salvarCliente(){
    console.log(this.clienteForm.value)
    this.fecharDialog();
  }
}
