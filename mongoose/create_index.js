//首先创建两个数据库连接
var mongoose = require('mongoose');

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


for (var i = 0; i < 10; i++) {
	console.log("db 1090" + i + " start create index.");
	var conn = mongoose.createConnection("mongodb://mongo-relation-source:1090" + i + "/relation");
	
	// var conn = mongoose.createConnection("mongodb://localhost:27017/relation");
	
	conn.on('error', console.error.bind(console, '连接错误:'));
	conn.once('open',function callback(){

		var RelationSourceModel = conn.model('source', RelationSourceSchema, 'source');

		RelationSourceModel.ensureIndexes(function (err) {
			if (err) return handleError(err);
			console.log("create index succ !");
		});
	});
}







