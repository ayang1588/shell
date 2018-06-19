// var map = function () {
//     emit('totals', this.field);
// }
//
// var reduce = function (key, values) {
//     return Array.sum(values);
// }
//
// var options = {
//     out: "out_field"
// }

// db.XXX.mapReduce(map, reduce, options);

var cursor = db.XXX.find().batchSize(1000);
while (cursor.hasNext()) {
    print('xxx');
}
