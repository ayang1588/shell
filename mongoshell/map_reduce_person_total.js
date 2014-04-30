var map = function(){
	emit(this.location, 1);
}

var reduce = function(key, values){
	return Array.sum(values);
}

var options = {
	out: "person_totals"
}

db.test.mapReduce(map, reduce, options);
