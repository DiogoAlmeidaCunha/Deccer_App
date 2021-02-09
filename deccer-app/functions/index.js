const functions = require("firebase-functions");
const express = require('express');
const port = 3000;
const app = express();
const google = require('googleapis')

const admin = require('firebase-admin');
admin.initializeApp();

const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');
//const { request } = require("http");
//const { response } = require("express");
app.use(bodyParser.urlencoded({extended:true})) 
app.use(bodyParser.json());

app.get('/server', (req, res) => {

	console.log(" - SERVER Firebase: REQUEST - ");
	res.json('Welcome to Firebase Server');

})

app.get('/server/names', (req, res) => {

	console.log(" - Names ON Firebase: REQUEST - ");
	res.json('Names ON Firebase: REQUEST ');

})

app.post('/server/sendemail',  (req, res) => {
  
	var name = req.body.name;
	var tel = req.body.telemovel;
	var morada = req.body.morada;
	var email = req.body.email;
	var mensagem = req.body.mensagem;

  console.log("----------------");
	console.log("Name: " + name);

  const CLIENTID = '156429563917-g3lv3suevtm4kcc5pqmoh8j7meoos429.apps.googleusercontent.com';
  const CLIENTSECRET = 'zUluVvZV9BvWGW20b-ggGeU4';
  const REFRESH_T = '1//04Cv471m6PMhiCgYIARAAGAQSNwF-L9IrWYN_o3d4Gz6-hwDmHP0AMs_kEzO6Xfa15Gp-cL_90VfJJ_kCBVmhl7E1kALq1_uBlt0';
  const ACCESS_T = 'ya29.A0AfH6SMCmQyN1wqjKp82ZkGHXhG427lvM5f-Q-U0Wi2jBnMOUuDf_mgrWuI9AamDz4zurEuzwTt9S5nfnFjyI11HK7NZwRAwGv-QNtwrPdXz5JUZJlwgmYEf5JTFyEYEfPH3TldSzqvdf40OLBKRNaUsDDaW2'
  /*const aAuth2 = new google.auth.OAuth2(CLIENTID,CLIENTSECRET,REDIRECTURL);
  aAuth2.setCredentials({refresh_token: REFRESH_T})*/
  //const accessToken =  aAuth2.setCredentials();

  
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'diogocunha588@gmail.com',
        pass: 'dac_Diogo588',
        clientId: CLIENTID,
        clientSecret: CLIENTSECRET,
        refreshToken: REFRESH_T,
        accessToken: ACCESS_T,
        timeout:'9999999999'
    },

  });

  // send mail with defined transport object
  let msg =  transporter.sendMail({
    from: name + ' <geral.deccer@gmail.com>', // sender address
    to: "geral.deccer@gmail.com", // list of receivers
    subject: "NEW REQUEST by: " + name , // Subject line
    text: "Cliente: " + name + " \n \n " + "Email: " + email + " \n \n Morada: " + morada + "\n \n " +  tel + " \n \n" + mensagem, // plain text body
  });


  transporter.sendMail( msg, (error,info) => {
  	console.log('E-mail sent - Nodemailer');
    res.json('Email sent - Nodemailer')
  } );

})

app.listen(port, (req,res) => {
  console.log(`Example app listening at http://localhost:${port}`);
})

exports.app = functions.https.onRequest(app);
