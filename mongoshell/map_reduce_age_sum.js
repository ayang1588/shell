var map = function(){
	emit(this.location, this.age);
}

var reduce = function(key, values){
	return Array.sum(values);
}

var options = {
	out: "age_totals"
}

db.test.mapReduce(map, reduce, options);
