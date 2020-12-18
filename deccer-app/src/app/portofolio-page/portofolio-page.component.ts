import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  styleUrls: ['./portofolio-page.component.css']
})
export class DialogElementsExampleDialog {}

@Component({
  selector: 'app-portofolio-page',
  templateUrl: './portofolio-page.component.html',
  styleUrls: ['./portofolio-page.component.css']
})
export class PortofolioPageComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  openDialog(val) {
    if(val==5 ){

      this.dialog.open(DialogElementsExampleDialog);

      /*S(document.getElementById('img#idBefore') as HTMLImageElement).src = '../../assets/por12.jpg';
      (document.getElementById('img#idAfter') as HTMLImageElement).src = '../../assets/por12.jpg';*/


    }
  }

  

  ngOnInit(): void {
  }

}


