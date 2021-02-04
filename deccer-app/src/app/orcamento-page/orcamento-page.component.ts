import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ServicesService } from '../app-services/services.service'

@Component({
  selector: 'app-orcamento-page',
  templateUrl: './orcamento-page.component.html',
  styleUrls: ['./orcamento-page.component.css']
})
export class OrcamentoPageComponent implements OnInit {

  name = "";
  email = "";
  phone = "";
  street = "";
  message = "";

  faCoffee = faCoffee;

  constructor(private service : ServicesService) {
   } 


  ngOnInit(): void {
  }

  getServer() {
    this.service.getServer().subscribe((response) => {
      console.log('Response from API  is ' + JSON.stringify(response) );
    }, (error) => { console.log("ERROR: " , error)})
  }

  getNames() {
    this.service.getNames().subscribe((response) => {
      console.log('Response from API  is ' + JSON.stringify(response) );
    }, (error) => { console.log("ERROR: " , error)})
  }

  sendMessage(){

    console.log(this.getNames());

    window.alert("Envio Indesponivel! \n\nContacto : 913868569\nEmail : geral.deccer@gmail.com ")

    console.log("Name: " + this.name + "\nPhone: " + this.phone + "\nEmail: " + this.email + "\nMorada: " + this.street + " \nMessage: " + this.message);
  }

  

}
