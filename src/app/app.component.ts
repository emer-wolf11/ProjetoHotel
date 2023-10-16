import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoAddClienteComponent } from './dialogo-add-cliente/dialogo-add-cliente.component';

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

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogoAddClienteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
