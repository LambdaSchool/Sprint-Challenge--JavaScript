// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/


const tyrannosaurus = {
	diet: "carnivorous",
	weight: "7000kg",
	length: "12m",
	period: "Late Cretaceious",
};

const stegosaurus = {
	diet: "herbivorous",
	weight: "2000kg",
	length: "9m",
	period: "Late Jurassic",
};

const velociraptor = {
	diet: "carnivorous",
	weight: "15kg", 
	length: "1.8m",
	period: "Late Cretaceious",
};


tyrannosaurus.roar = function() {
	return "RAWERSRARARWERSARARARRRR!";
}


// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceious

// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic

// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceious

// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?
console.log(tyrannosaurus.weight);
// What was the diet of a velociraptor?
console.log(velociraptor.diet);
// How long was a stegosaurus?
console.log(stegosaurus.length);
// What time period did tyrannosaurus live in?
console.log(tyrannosaurus.period);

// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.
console.log(tyrannosaurus.roar());


// ==== Arrays ====

// Given an array of college graduates.  Complete the following requests without using any array methods like .forEach(), .map(), .reduce(), .filter()

const graduates = [{"id":1,"first_name":"Cynde","university":"Missouri Southern State College","email":"ctorry0@macromedia.com"},
{"id":2,"first_name":"Saundra","university":"The School of the Art Institute of Chicago","email":"swhal1@state.gov"},
{"id":3,"first_name":"Lambert","university":"Marian College","email":"lparham2@techcrunch.com"},
{"id":4,"first_name":"Modestine","university":"International Medical & Technological University","email":"mdolder3@symantec.com"},
{"id":5,"first_name":"Chick","university":"Sultan Salahuddin Abdul Aziz Shah Polytechnic","email":"camorts4@google.com.au"},
{"id":6,"first_name":"Jakob","university":"Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft","email":"jharken5@spiegel.de"},
{"id":7,"first_name":"Robbi","university":"Salem University","email":"rbrister6@redcross.org"},
{"id":8,"first_name":"Colline","university":"Coastal Carolina University","email":"cbrosh7@alibaba.com"},
{"id":9,"first_name":"Michail","university":"Universidad Católica de Ávila","email":"mrome8@shinystat.com"},
{"id":10,"first_name":"Hube","university":"Universitat Rovira I Virgili Tarragona","email":"hlethbrig9@foxnews.com"}]

/* FIX THIS */ 

/* Request 1: Create a new array called universities that contains all the univeristies in the graduates array.  
Once you have the new array created, sort the universities alphabetically and log the result. */

/* Didn't really need to do all this.. self challenge? */
let alphabetWeight = {
	// English alphabet weighting
	'A': 1,
	'a': 1,
	'B': 2,
	'b': 2,
	'C': 3,
	'c': 3,
	'D': 4,
	'd': 4,
	'E': 5,
	'e': 5,
	'F': 6,
	'f': 6,
	'G': 7,
	'g': 7,
	'H': 8,
	'h': 8,
	'I': 9,
	'i': 9,
	'J': 10,
	'j': 10,
	'K': 11,
	'k': 11,
	'L': 12,
	'l': 12,
	'M': 13,
	'm': 13,
	'N': 14,
	'n': 14,
	'O': 15,
	'o': 15,
	'P': 16,
	'p': 16,
	'Q': 17,
	'q': 17,
	'R': 18,
	'R': 18,
	'S': 19,
	's': 19,
	'T': 20,
	't': 20,
	'U': 21,
	'u': 21,
	'V': 22,
	'v': 22,
	'W': 23,
	'w': 23,
	'X': 24,
	'x': 24,
	'Y': 25,
	'y': 25,
	'Z': 26,
	'z': 26,
};

/* Now I know how to arrange letters in a string I just have to compare all letters in a string until I have a clear winner */
const alphabetSoup = function(sortString) {
	let sortedString = [];
	for(let i = 0; i < sortString.length; i++) {
		sortedString.push(sortString[i]);
		for (let x = 0; x < sortedString.length; x++) {
			if (x == i) { break; }
			if (alphabetWeight[sortedString[i]] < alphabetWeight[sortedString[x]]) {
				let curItem = sortedString[i];
				let replacedItem = sortedString[x];
				sortedString[i] = replacedItem;
				sortedString[x] = curItem;
			}
		}
	}
	return sortedString;
}
/* END self challenge */
/*
for (let item = 0; item < universities.length; item++) {
	if 
}
*/

let universities = [];
const arrayLength = function(arrayToCheck) {
	let item;
	let arrayLength = 0;
	for(let i = 0; i <= arrayLength; i++) {
		item = arrayToCheck[i];
		if (item === undefined) {
			return arrayLength;
		}
		else {
			arrayLength += 1;
		}
	}
}

let theArraylength = arrayLength(graduates);
for(let i = 0; i < theArraylength; i++) {
	// arrayLength needs some fixin' so a quick error check here
	if (graduates[i] === undefined) {
		break;
	}
	let university = graduates[i].university;
	universities.push(graduates[i].university);
}

console.log(universities.sort()); // I'm coming after you sort method!
/*
const universities = graduates.map((item) => {
	return item.university;
});
console.log(universities.sort());
*/

/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. 

The resulting contact information should have a space between the first name and the email information like this: 
Name email@example.com

Log the result of your new array. */
let contactInfo = [];
for (let i = 0; i < graduates.length; i++) {
	contactInfo.push(`${graduates[i].first_name} ${graduates[i].email}`);
}
console.log(contactInfo);


/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called uni that contains them all. Log the result. */
let uni = [];
for (let i = 0; i < graduates.length; i++) {
	if (graduates[i].university.includes('Uni')) {
		uni.push(graduates[i].university);
	}
}

console.log(uni);


// ==== Array Methods ====

// Given this zoo data from around the United States, follow the instructions below

zooAnimals = [{"animal_name":"Jackal, asiatic","population":5,"scientific_name":"Canis aureus","state":"Kentucky"},
{"animal_name":"Screamer, southern","population":1,"scientific_name":"Chauna torquata","state":"Alabama"},
{"animal_name":"White spoonbill","population":8,"scientific_name":"Platalea leucordia","state":"Georgia"},
{"animal_name":"White-cheeked pintail","population":1,"scientific_name":"Anas bahamensis","state":"Oregon"},
{"animal_name":"Black-backed jackal","population":2,"scientific_name":"Canis mesomelas","state":"Washington"},
{"animal_name":"Brolga crane","population":9,"scientific_name":"Grus rubicundus","state":"New Mexico"},
{"animal_name":"Common melba finch","population":5,"scientific_name":"Pytilia melba","state":"Pennsylvania"},
{"animal_name":"Pampa gray fox","population":10,"scientific_name":"Pseudalopex gymnocercus","state":"Connecticut"},
{"animal_name":"Hawk-eagle, crowned","population":10,"scientific_name":"Spizaetus coronatus","state":"Florida"},
{"animal_name":"Australian pelican","population":5,"scientific_name":"Pelecanus conspicillatus","state":"West Virginia"}];

// The zoos need a list of all their animal's names converted to lower case.  Create a new array named lowerCase and map over each name to convert them all to lower case.  Log the resut.
const lowerCase = zooAnimals.map((item) => {
	return item.animal_name.toLowerCase();
});

console.log(lowerCase); 

// The zoos need to know their total animal population across the United States.  Add up all the population numbers from all the zoos using the .reduce() method.
const populationTotal = zooAnimals.reduce((accumulator, item) => {
	return accumulator += item.population;
}, 0);

console.log(populationTotal);