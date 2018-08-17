var mongoose   = require("mongoose");
var Blog = require("./models/blog");

var data = [
    {
        title: "Fox1",
        image: "https://images.freeimages.com/images/small-previews/72c/fox-1522156.jpg",
        body: "This is a red fox1.",
    },
    {
        name: "Fox2",
        image: "https://images.freeimages.com/images/small-previews/72c/fox-1522156.jpg",
        body: "This is a red fox2.",
    },
    {
        name: "Fox3",
        image: "https://images.freeimages.com/images/small-previews/72c/fox-1522156.jpg",
        body: "This is a red fox3.",
    }
];

function seedDB(){
    // Remove all data
   Blog.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed content");
        // add seed data
        data.forEach(function(seed){
            Blog.create(seed, function(err, blog){
                if(err){
                    console.log(err);
                }else{
                    console.log("added a blog");
                }
            });
        });
    });
};

module.exports = seedDB;