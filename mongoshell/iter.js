var cursor=db.getCollectionNames(); // 获取collection 名
for(i=0;i<cursor.length;i++){
	var dbInfo = db.isMaster();
	printjson(dbInfo);
}
