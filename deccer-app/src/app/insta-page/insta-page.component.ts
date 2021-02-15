import { Component, OnInit, Inject } from '@angular/core';
import { ServicesService } from '../app-services/services.service'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

export interface DialogData {
  type: 'sent' | 'email' | 'dados';
}

var type ="Erro"
var message = "Mail"

@Component({
  selector: 'app-insta-page',
  templateUrl: './insta-page.component.html',
  styleUrls: ['./insta-page.component.css']
})
export class InstaPageComponent implements OnInit {

  name = "";
  email = "";
  phone = "";
  street = "";
  message = "";

  faCoffee = faCoffee;

  constructor(private service : ServicesService, public dialog: MatDialog) {  } 


  ngOnInit(): void {
  }

  sendEmail(){
    this.service.sendEmail(this.name , this.phone, this.street, this.email, this.message).subscribe((response) =>{
      console.log('Response from API  is ' + JSON.stringify(response) );
    }, (error) => { console.log("ERROR: " , error) })

    return;
  }

  sendMessage(){
    if(this.name != "" && this.email!="" && this.phone != ""){

      if(this.email.includes("@")) {

        if(this.phone.length >= 9 ){

          this.sendEmail();

          type = "Enviado"
          message = "Mensagem enviada. Dentro de 24h entramos em contacto."
          this.dialog.open(DialogDataExample);
          setTimeout(function(){ window.location.reload()}, 3000);
        }

        else{

          message = "Numero telefonico incorreto."

          this.dialog.open(DialogDataExample);
        }
        
      }
      
      else {

        message = "Email incorreto. Por favor, corriga."

        this.dialog.open(DialogDataExample);}
    
      } else {
        
        message = "Dados incorreto. Por favor, corriga."

        this.dialog.open(DialogDataExample);}
    

  }

} 


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
  styleUrls: ['./insta-page.component.css']

})

export class DialogDataExample  {
  
  type = type;
  message = message;

  constructor(public dialog: MatDialog) {
  }

  exit(){
    window.location.reload();
  }

  close(){
    this.dialog.closeAll();
  }
}
