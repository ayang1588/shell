// var ExampleSchema = new Schema({
// 	name:String,
// 	binary:Buffer,
// 	living:Boolean,
// 	updated:Date,
// 	age:Number,
// 	mixed:Schema.Types.Mixed, //该混合类型等同于nested
// 	_id:Schema.Types.ObjectId,  //主键
// 	_fk:Schema.Types.ObjectId,  //外键
// 	array:[],
// 	arrOfString:[String],
// 	arrOfNumber:[Number],
// 	arrOfDate:[Date],
// 	arrOfBuffer:[Buffer],
// 	arrOfBoolean:[Boolean],
// 	arrOfMixed:[Schema.Types.Mixed],
// 	arrOfObjectId:[Schema.Types.ObjectId]
// 	nested:{
// 	stuff:String,
// 	}
// });

var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/activity');

var db = mongoose.connection;

var EventEntitySchema = mongoose.Schema({
	activityId: {type: String, index: true},
	cityName: String,
	geoloc: {
		lng: Number,
		lat: Number
	},
	holdType: Number,
	memberApplyCount: Number,
	memberApplyScore: Number,
	memberCount: Number,
	memberScore: Number,
	refreshDate: Number,
	score: Number,
	searchDateRangeTypes:  [Number],
	showCities: [Number],
	startDate: String,
	subject: Number,
	time: Number,
	topDateTypes: [Number]
},{
	collection: "event_calculator"
});

// EventEntitySchema.virtual('full').get(function(){
//       return this.activityId;
// });
	
db.on('error', console.error.bind(console, '连接错误:'));
db.once('open',function callback(){

	var EventEntityModel = mongoose.model('event_calculator', EventEntitySchema, 'event_calculator');


    // Person
    //   .find({ occupation: /host/ })
    //   .where('name.last').equals('Ghost')
    //   .where('age').gt(17).lt(66)
    //   .where('likes').in(['vaporizing', 'talking'])
    //   .limit(10)
    //   .sort('-occupation')
    //   .select('name occupation')
    //   .exec(callback);
    
    var query = EventEntityModel.find({});
    query.where('subject', 1);
    query.limit(5);

    query.exec(function(err, eventEntity){
		if (err) return handleError(err);
		console.log(eventEntity);
	});

});







