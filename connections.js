const elastic = require('elasticsearch')
const mongo = require('mongodb')
const cassandra = require('cassandra')
const redis = require('redis')

const host = 'rws66491fwks.us.oracle.com'

var getElasticClient = function(){
    var client = new elastic.Client( {  
        hosts: [
          'http://'+host+':9200/'
        ]
      });
    return client;
}

var getRedisClient = function(){
    var client = redis.createClient(6379, host);
    return client;
}

var getMongoClient = function(){
    var client = mongo.MongoClient.connect('mongodb://'+host+':27017/',{ useNewUrlParser: true });
    return client;
}


var client = mongo.MongoClient.connect('mongodb://'+host+':27017/',{ useNewUrlParser: true }, function(err, db){
    if (err) throw err;
    var dbo = db.db("mydb");
    var query = { name: "vinod" };
    //var cursor = dbo.collection("sandbox").find(query);
    
    dbo.collection("sandbox").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
});








    var elasticExample = function(){
        getElasticClient().cluster.health({},function(err,resp,status) {  
            console.log("-- Client Health --",resp);
        });
    }

    var redisExample = function(){
        getRedisClient().on('connect', function() {
            console.log('Redis client connected');
        });

        getRedisClient().on('error', function (err) {
            console.log('Something went wrong ' + err);
        });

        getRedisClient().set('my test key', 'my test value', redis.print);
        getRedisClient().get('my test key', function (error, result) {
        if (error) {
            console.log(error);
            throw error;
        }
            console.log('GET result ->' + result);
        });
}
    
  

