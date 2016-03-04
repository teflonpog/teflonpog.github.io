// Step 1 //
var animal = {};
animal.species = "cow";
animal["name"] = "Wow";
animal.noises = [];
console.log(animal);

// Step 2 //
var noises = [];
noises[0] = "moo!";
noises.push("squawk!");
noises.unshift("meow!");
noises[noises.length] = "bark!";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

// Step 3 //
animal.noises = noises;
animal.noises.push("chirp!");
console.log(animal);

// Step 4 and 5 //

// Step 6 //
var animals = [];

animals.push(animal);
console.log(animals);

var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};

animals.push(duck);
console.log(animals);

var armadillo = {
    species: 'armadillo',
    name: 'Armydillo',
    noises: ['grunt', 'sniff']
};

var dinosaur = {
    species: 'dinosaur',
    name: 'Rex',
    noises: ['roar!', 'rawr!']
};

animals.push(armadillo);
animals.push(dinosaur);
console.log(animals);
console.log(animals.length);

// Step 7 //

var friends = [];

function randomAnimal() {
    
    var chooseRandomAnimal = animals[Math.floor(Math.random() * animals.length)];
    return chooseRandomAnimal.name;
    
}

friends.push(randomAnimal());
console.log(friends);
animals[0].friends = friends;
//console.log(animals[0].friends);

// Part 2 //

// Step 1 //

function search(name) {
    for (var i = 0; i < animals.length; i++) {
        if (name.toLowerCase() === animals[i].name.toLowerCase()) {
            return animals[i];
        }
    } 
    return null;
}

// Step 2 //

function edit(name, object) {
    for (var i = 0; i < animals.length; i++) {
        if (name === animals[i].name) {
            animals[i] = object;
            return animals[i];
        }
    }
}

// Step 3 //

function remove(name) {
    for (var i = 0; i < animals.length; i++) {
        if (name === animals[i].name) {
            animals.splice(i, 1);
        }
    }
}

// Step 4 //

function create(object) {
    if (object.name.length > 0 && object.species.length > 0) {
        for (var i = 0; i < animals.length; i++) {
            if (object.name === animals[i].name) {
                return;
            }
        }
    }
    animals.push(object);
}