express = require("express");
app = express();

app.use(express.static(__dirname + '/static'));

app.post("/signup", function(req, res){
    //Add to Google sheets, then respond to page
    
});

app.listen(process.env.PORT, function(){
    console.log("Listening on " + process.env.PORT);
});