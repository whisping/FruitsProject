//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

// add data

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [1, "Name is required!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    // name: "Apple",
    rating: 10,
    review: "Pretty solid as a fruit."
});

//fruit.save();

// add person

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema,
})

const Person = mongoose.model("Person", personSchema);

// const pineapple = new Fruit({
//     name: "Pineapple",
//     score: 9,
//     review: "Great fruit."
// })
//
// pineapple.save();

const melon = new Fruit({
    name: "Melon",
    score: 6,
    review: "Sweat fruit."
})

melon.save();

// const person = new Person({
//     name: "Amy",
//     age: 12,
//     favouriteFruit: pineapple
// })

Person.updateOne({name: "John"}, {favouriteFruit: melon}, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Melon added");
    }
})

// person.save();


Fruit.find(function(err, fruits){
    if (err) {
        console.log(err);
    }   else {

        mongoose.connection.close();

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});

// Fruit.deleteOne({name: "Banana"}, function(err){
//     if (err) {
//         console.log(err);
//     }   else {
//         console.log("Succesfully deleted.");
//     }
// })

// Fruit.updateOne({_id: "5d6cf5067bd93bbc1adb5236"}, {rating: 10}, function(err){
//     if (err) {
//         console.log(err);
//     }   else {
//         console.log("Succesfully updated the document.");
//     }
// })
