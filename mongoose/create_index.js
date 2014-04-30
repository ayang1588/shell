var mongoose = require('mongoose');

console.log("start create index.");

for (var j = 0; j < 10; j++) {

	var RelationSourceSchema = mongoose.Schema({
		// "expire_start" : ISODate("2014-04-21T04:41:48.009Z"),
		// "relation" : "100777:59771377",
		// "source" : "NEARBY",
		// "start_time" : NumberLong("1398055308009")
		expire_start : {type: Date, expires: 259200},
		relation : String,
		source : String,
		start_time : Number
	},{
		collection: "source"
	});

	var db = mongoose.createConnection("mongodb://mongo-relation-source-001.m6:1090" + j + "relation");
	db.on('error',console.error.bind(console,'连接错误:'));
    db.once('open',function(){
      
      	var RelationSourceModel = db.model('source', RelationSourceSchema, 'source');

		RelationSourceModel.ensureIndexes(function (err) {
			if (err) return handleError(err);
			console.log("create index succ !");
		});

    });
	
}    



