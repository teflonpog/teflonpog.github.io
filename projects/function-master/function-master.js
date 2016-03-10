// objectValues() :
// Should take an object and return its values in an array
function objectValues(obj) {
    var output = [];
    
    for (var key in obj) {
        output.push(obj[key]);
    }
    
    return output;
}

// keysToString() :
// Should take an object and return all its keys in a string each separated with a space
function keysToString(obj) {
    return Object.keys(obj).join(" ");
}

// valuesToString() :
// Should take an object and return all its string values in a string each separated with a space
function valuesToString(obj) {
    var output = "";
    
    for (var key in obj) {
        if (typeof obj[key] === "string") {
            output += obj[key] + " ";
        }
    }
    return output.trim();
}

// arrayOrObject() :
// Should take one argument and return 'array' if its an array and 'object' if its an object
function arrayOrObject(arg) {
    if (Array.isArray(arg)) {
        return 'array';
    } else if (typeof arg === "object") {
        return 'object';
    }
}

// capitalizeWord() :
// Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// capitalizeAllWords() : 
// Should take a string of words and return a string with all the words capitalized
function capitalizeAllWords(string) {
    //return capitalizeWord(string);
    var split = string.split(" ");
    
    var output = "";
    
    for (var i = 0; i < split.length; i++) {
        output += capitalizeWord(split[i]) + " ";
    }
    return output.trim();
}

// welcomeMessage() :
// Should take an object with a name property and return 'Welcome <Name>!'

function welcomeMessage(obj) {
    return 'Welcome ' + capitalizeWord(obj.name) + '!';
}

// profileInfo() :
// Should take an object with a name and a species and return '<Name> is a <Species>'

function profileInfo(obj) {
    return capitalizeWord(obj.name) + " is a " + capitalizeWord(obj.species);
}

// maybeNoises() :
// Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'

function maybeNoises(obj) {
    if (obj.noises && obj.noises[0]) {
        return obj.noises.join(" ");
    } else {
        return "there are no noises";
    }
}

// hasWord() : 
// Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.

function hasWord(string, word) {
    if (string.indexOf(word) >= 0) {
        return true;
    } else return false;
}

// addFriend() :
// Should take a name and an object and add the name to the object's friends array then return the object

function addFriend(name, object) {
    object.friends.push(name);
    return object;
}

// isFriend() : 
// Should take a name and an object and return true if <name> is a friend of <object> and false otherwise

function isFriend(name, object) {
    if (object.friends) {
        for (var i = 0; i < object.friends.length; i++) {
            if (object.friends[i] === name) {
                return true;
            }
        }
    }
    return false;
}

// nonFriends() : 
// Should take a name and a list of people, and return a list of all the names that <name> is not friends with

function arrayIncludes(array, element) {
    return (array.indexOf(element) > -1);
}

function nonFriends(name, people) {
    
    // find the object representing the named person
        // go through all the people
        // if the current person's name is the same as the name given, hold on to that person
    // get that person's friends list
    // go through all the OTHER people
    // go through list of people
    // go through each person's friends
    // ask 'is the named person friends with each of these people'
    // instead ask 'is this person's name in the named person's friends list?'
    // if not, add (WHAT NAME) that name to the out array
    
    var out = [];
    var person;
    for (var i = 0; i < people.length; i++) {
        if (people[i].name === name) {
            person = people[i];
        }
    }
    
    var friends = person.friends;
    
    for (var j = 0; j < people.length; j++) {
        if (people[j] === person) {
            continue; // moves on to the next iteration of the loop //
        }
        var currentPerson = people[j];
        if (currentPerson === person) continue;
        
        if (!arrayIncludes(friends, currentPerson.name)) {
            out.push(currentPerson.name);
        }
    }
    
    return out;
}

// updateObject() : 
// Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.

function updateObject(obj, key, value) {
    
    if (obj[key]) {
        obj[key] = value;
    } else if (!obj[key]) {
        obj[key] = value;
    }
    
    return obj;
    
}

// removeProperties() : 
// Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>

function removeProperties(obj, stray) {
    
    // for (var i = 0; i < stray.length; i++) {
    //     if (obj[stray[i]] === stray[i]) {
    //         delete obj[stray[i]];
    //     }
    // }
    // return obj;
    
}

// dedup() : 
// Should take an array and return an array with all the duplicates removed

function dedup(array) {
    
}