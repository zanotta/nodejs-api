const express 		= require('express');
const cors 			= require('cors');
const mongoose  	= require('mongoose');
const requireDir 	= require('require-dir');

//Iniciando o app
const app 		= express();
app.use(express.json());//Permitir receber dados em json
app.use(cors());//Permitindo acesso de todos os domínios

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');//Carregando todas as models do dir

//Rota principal
app.use('/api', require('./src/routes'));//use = recebe todas as requisições: put, get

//npm run dev
app.listen(3001, function(){ console.log('Server on') });