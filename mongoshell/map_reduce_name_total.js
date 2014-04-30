var map = function(){
	emit(this.location, this.name);
}

var reduce = function(key, values){
	return values.join(',');
}

var options = {
	out: "name_totals"
}

db.test.mapReduce(map, reduce, options)
