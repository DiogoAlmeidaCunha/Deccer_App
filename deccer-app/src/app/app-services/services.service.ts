import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http : HttpClient) { }

  getServer(){
    return this.http.get('/server');
  }

  getNames(){
    return this.http.get('/server/names');
  }

  sendEmail(name,telemovel,morada,email,mensagem){

    return this.http.post('/server/sendemail', {
      "name" : name, 
      "telemovel": telemovel, 
      "morada" : morada, 
      "email" : email, 
      "mensagem" : mensagem
    });

  }
}

/* ng serve --proxy-config proxy.conf.json */
