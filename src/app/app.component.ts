import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoAddClienteComponent } from './dialogo-add-cliente/dialogo-add-cliente.component';
import { DialogoAddQuartoComponent } from './dialogo-add-quarto/dialogo-add-quarto.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Frontend';
  nome = '';
  cpf =  '';
  rg = '';
  email = '';
  telefone = '';
  numero = 0;
  andar = 0;
  valor = 0.0;
  status = false;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogoAddClienteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  openDialogQuarto(): void {
    const dialogRef = this.dialog.open(DialogoAddQuartoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
