#!/usr/bin/env node

var express = require('express');
var app = express();

var PORT = process.env.PORT || 80 // || 8080

app.use(express.json());


var noteRouter = require('./routes/note.js');
app.use('/note', noteRouter);


app.listen(
	PORT,
	() => console.log('Listening on: http://localhost'+(PORT == 80 ? '' : ':'+PORT)+' .')
)


