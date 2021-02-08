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

  sendEmail(){
    this.service.sendEmail(this.name , this.phone, this.street, this.email, this.message).subscribe((response) =>{
      console.log('Response from API  is ' + JSON.stringify(response) );
    }, (error) => { console.log("ERROR: " , error) })

    return;
  }

  sendMessage(){

    this.sendEmail();
    window.alert("Orçamento solicitado. Entramos em contacto nas proximas 24h.")
    location.reload();

  }

  

}
