import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html'
})
export class ConfirmdialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero,
  ) {}

  onNoClick(): void {
    this.dialogRef.close( false );
  }

  onConfirm(): void {
    this.dialogRef.close( true );
  }

}
