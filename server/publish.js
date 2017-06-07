Resolutions = new Mongo.Collection("resolutions");

Meteor.publish("allResolutions", ()=>{
    return Resolutions.find({complete: false});
});

Meteor.publish("userResolutions", function(){
    return Resolutions.find({user: this.userId});
});

Menu = new Mongo.Collection("menu");

Meteor.publish("menu", function(){
    return Menu.find();
});