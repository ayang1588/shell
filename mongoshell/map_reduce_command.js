var final = function(key, reducedValue){
	var obj = {};
	obj.key = key;
	obj.reducedValue = reducedValue;
	return obj;
}

var map = function(){
	emit(this.location, this.name);
}

var reduce = function(key, values){
	return key + ':  ' + values.path.join(', ');
}

db.runCommand({
	mapreduce:'test',
	map:map,
	reduce:reduce,
	out:'command_doc',
	verbose:true,
	finalize:final
})
