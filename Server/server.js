var MongoClient = require('mongodb').MongoClient;
var Hapi = require('hapi');

// var url = "mongodb://localhost:27017/learningmongo"
const CONNECTION_URL = "mongodb+srv://adpatil36:Qwerty@cluster0-tvjir.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "learning_mongo";

var collection;
var database;

var server = new Hapi.Server();
server.connection({
    port:8080
})

server.route([{
    method: "GET",
    path:"/api/list",
    handler: function(request,reply){
        collection.find({},{"location":1,"_id":0}).toArray(function(err, movie){
            reply(movie.map(item=>item.location));
        })
    }
},
{
    method: "GET",
    path:"/api/count",
    handler: function(request,reply){
        collection.find({},{"location":1,"_id":0}).toArray(function(err, movie){
            reply(movie.length);
        })
    }
},
{
    method: "GET",
    path:"/api/search",
    handler: function(request,reply){
        var king = request.query.king;
        var location = request.query.location;
        var battle_type = request.query.battle_type
        
        console.log(king,location,battle_type)
        if(king && location && battle_type){
            collection.find({$or:[{"attacker_king":king},{"defender_king":king}],"battle_type":battle_type,"location":location}).toArray(function(err, movie){
            reply(movie);
          })
        } else if(king && !location && !battle_type){ 
            collection.find({$or:[{"attacker_king":king},{"defender_king":king}]}).toArray(function(err, movie){
                reply(movie);
              })
            }
            else if(!king && location && !battle_type){
                var regex = new RegExp(["^", location, "$"].join(""), "i");
                collection.find({"location":regex}).toArray(function(err, movie){
                    reply(movie)
                })
            }
                
        }
    }
])
MongoClient.connect(CONNECTION_URL, function(error, client ){
    database = client.db(DATABASE_NAME);
    collection = database.collection("movie");
        
    server.start(function(){
        console.log("Server listening on port 8080")
    })
    console.log("DB Connected Successfully")
})