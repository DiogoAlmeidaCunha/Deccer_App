const functions = require("firebase-functions");
const express = require('express');
const port = 3000;
const app = express();

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

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'diogocunha588@gmail.com',
      clientId: '156429563917-9tj45ijqcddl5cg0bpq5e26fhf2kcljr.apps.googleusercontent.com',
      clientSecret: 'dbXO4wLdmRouyuZWhlcD2lrC',
      refrehToken: '1//04JhUWAmRFBwDCgYIARAAGAQSNwF-L9IrtcA0mE-LOCydtuD95p9ssc53RbB7Y1aQl07wa5VTcSAWOYE7QXcEJDLp8_sVcPWUKBg',
      accessToken: 'ya29.A0AfH6SMAc-mn8B89IUcev9gg14Dnb5n_DJNvOcwcsyY9Wa2NIU0mG2P0WxmziDzjzwTh8h5gfom3f0sfYZ1ZAzCfWJlJNqTXMtEHA4ijbEfInlg1A5vUi57pTQyxKBG9MTZu6AVmptpNJmCh8QqeCiN7MMHYc',
    }

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
