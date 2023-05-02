import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { FormAddCarComponent } from '../form-add-car/form-add-car.component';
import { FormAuthorizationComponent } from '../form-authorization/form-authorization.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private dialog: MatDialog) {}

  addCar(): void {
    this.dialog.open(FormAddCarComponent);
  }

  Authorization(): void {
    const dialogRef: MatDialogRef<FormAuthorizationComponent> = this.dialog.open(FormAuthorizationComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
