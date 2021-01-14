import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

var val = null;

@Component({
  selector: 'app-portofolio-page',
  templateUrl: './portofolio-page.component.html',
  styleUrls: ['./portofolio-page.component.css']
})
export class PortofolioPageComponent implements OnInit {


  constructor(public dialog: MatDialog) { 
    
  }

  
  openDialog(img) {

    val = img;

    if(val == 0){
      this.dialog.open(DialogElementsExampleDialog);
    }
    else if(val==1 ){
      this.dialog.open(DialogElementsExampleDialog);
    } else if( val==2){ 
      this.dialog.open(DialogElementsExampleDialog);
    } else if( val== 3){
      this.dialog.open(DialogElementsExampleDialog);
    } else if(val==4){
      this.dialog.open(DialogElementsExampleDialog);
    }
    else if(val==5 ){
      this.dialog.open(DialogElementsExampleDialog);
    } else if( val == 6){
      this.dialog.open(DialogElementsExampleDialog);

    }
    
  }

  ngOnInit(): void {
  }

}




@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  styleUrls: ['./portofolio-page.component.css']
})
export class DialogElementsExampleDialog {
  
  imgBefore = "";
  imgAfter = "" ;

  constructor(){

    if( val == 0){
      this.imgBefore = "../../assets/B&A/B0.jpg";
      this.imgAfter = "../../assets/B&A/A0.jpg"
    }
    else if(val == 1){
      this.imgBefore = "../../assets/B&A/B1.jpg";
      this.imgAfter = "../../assets/B&A/A1.jpg"
    }
    else if (val == 2){
      this.imgBefore = "../../assets/B&A/B2.jpg";
      this.imgAfter = "../../assets/B&A/A2.jpg"
    }
    else if (val == 4){
      this.imgBefore = "../../assets/B&A/B4.jpg";
      this.imgAfter = "../../assets/B&A/A4.jpg"
    }
    if(val == 5){
      this.imgBefore = "../../assets/B&A/B5.jpg";
      this.imgAfter = "../../assets/B&A/A5.jpg"
    }
    else if (val == 6){
      this.imgBefore = "../../assets/B&A/B6.jpg";
      this.imgAfter = "../../assets/B&A/A6.JPG"
    }
    


  }

}
