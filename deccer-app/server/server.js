const express = require('express')
const bodyParser = require('body-parser')

const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:false})) 
app.use(bodyParser.json());

app.get('/server', (req, res) => {

	console.log(" - SERVER GOT REQUEST -")

	res.json({"STATUS": " 200 " , "MESSAGE" : "Hello Deccer!"});

})

app.get('/server/names', (req, res) => {

	console.log(" - SERVER GOT REQUEST -")

	res.json([{"NAME": " DIOGO "} , {"NAME" : "TATI"} ]);

})

app.post('/sendemail',  (req, res) => {
  

	var name = req.body.name;
	var tel = req.body.telemovel;
	var morada = req.body.morada;
	var email = req.body.email;
	var mensagem = req.body.mensagem;

	console.log("Name: " + name);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
   	service: "gmail",
    auth: {
      user: 'geral.deccer@gmail.com', // generated ethereal user
      pass: 'deccer2020', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let msg =  transporter.sendMail({
    from: name + ' <geral.deccer@gmail.com>', // sender address
    to: "geral.deccer@gmail.com", // list of receivers
    subject: "NEW REQUEST by: " + name , // Subject line
    text: "Cliente: " + name + " \n \n " + "Email: " + email + " \n \n " + morada + "\n \n " +  tel + " \n \n" + mensagem, // plain text body
  });


  transporter.sendMail( msg, (error,info) => {

  	console.log('Message sent');

  } );

  console.log("Email Sent")
  res.send('Email sent!')
})

//sendemail/andre/9131231231/andre@gmail.com/para%20aqui%20esta%20tudo%20mesmo%20mal%20nao%20sei%20o%20qee%20fazer

app.listen(port, (req,res) => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/*
{
    "name": "Maria do Carmo",
    "telemovel": 91231232,
    "morada": "Rua santa luzia", 
    "email" : "maria@gmail.com",
    "mensagem": "Boa tarde Sr. Diogo, solicito um orçamento para pintura de casa total. Morada é X e m2 sao 44. Beijinhos"
}
*/