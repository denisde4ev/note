var express = require('express');
var router = express.Router();	


router.post('/:yyyy/:mm/:dd', (req, res) => {
	const date = `${req.params.yyyy}/${req.params.mm}/${req.params.dd}`;

	console.log(req.body);


	if (date == '0/0/0') {
		res.status(418).send({message: 'Need an id!'});
	};

	res.send('this is date: '+date);
});

router.get('/:yyyy/:mm/:dd', (req, res) => {
	const date = `${req.params.yyyy}/${req.params.mm.padStart(2,'0')}/${req.params.dd.padStart(2,'0')}`;

	//console.log(req.body);

	if ( /^0\/0\/0$|^1970\/01\/01$/.test(date) ) {
		res.status(418).send('Need an id!');
	};

	res.send('this is date: '+date);
});

router.get('/', (req, res) => {
	const { id } = req.params;
	const { logo } = req.body;

	if (!id) {
		res.status(418).send('Need an id!');
	};

	console.log('GET is id: '+id);
	res.send('this is id: '+id);

});



module.exports = router;
