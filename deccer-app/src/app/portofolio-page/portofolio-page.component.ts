import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-portofolio-page',
  templateUrl: './portofolio-page.component.html',
  styleUrls: ['./portofolio-page.component.css']
})
export class PortofolioPageComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  

  ngOnInit(): void {
  }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  styleUrls: ['./portofolio-page.component.css']
})
export class DialogElementsExampleDialog {}
