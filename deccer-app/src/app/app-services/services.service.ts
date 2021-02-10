import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http : HttpClient) { }

  getServer(){
    return this.http.get('https://us-central1-deccer-22b5a.cloudfunctions.net/app/server/');
  }

  getNames(){
    return this.http.get('https://us-central1-deccer-22b5a.cloudfunctions.net/app/server/names');
  }

  sendEmail(name,telemovel,morada,email,mensagem){

    console.log("Inside Services : Ask server to send e-mail...")

    return this.http.post('https://us-central1-deccer-22b5a.cloudfunctions.net/app/server/sendemail', {
      "name" : name, 
      "telemovel": telemovel, 
      "morada" : morada, 
      "email" : email, 
      "mensagem" : mensagem
    },
    {responseType: 'text'});

  }
}

/* ng serve --proxy-config proxy.conf.json */
