import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-orcamento-page',
  templateUrl: './orcamento-page.component.html',
  styleUrls: ['./orcamento-page.component.css']
})
export class OrcamentoPageComponent implements OnInit {

  faCoffee = faCoffee;

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(){
    window.alert("Envio Indesponivel! \n\nContacto : 913868569\nEmail : geral.deccer@gmail.com ")
  }

}
