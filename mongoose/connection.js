var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/mongoose');

var db = mongoose.connection;

db.on('error',console.error);
db.once('open',function callback(){

	var kittySchema = mongoose.Schema({
		name: String
	});
	
	kittySchema.methods.speak = function() {
		var greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
		console.log(greeting);
	};

	var Kitten = mongoose.model('Kitten', kittySchema);

	var instance = new Kitten();
	instance.name = 'test';

	instance.save(function(err, Kitten, numberAffected) {
		console.log(err + '\n' + Kitten + "\n" + numberAffected);
	});

	
});






