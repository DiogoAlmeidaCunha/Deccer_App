import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../app-services/services.service'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


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

  constructor(private service : ServicesService) {  } 


  ngOnInit(): void {
  }

  sendMessage(){

    window.alert("Orçamento solicitado. Entramos em contacto nas proximas 24h.")
    //window.location.reload(true);

  }

} 
