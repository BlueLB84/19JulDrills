// **********  1. Object initializers and methods  ************

const loaf = {
    flour: 300,
    water: 210
}

// console.log(loaf.flour);
// console.log(loaf.water);

loaf.hydration = function(){};
// console.log(loaf);

loaf.hydration = function(water, flour) {
    return (this.water/this.flour)*100;
}

// console.log(loaf.hydration());



//  ********* 2. Iterating over an object's properties  *************

const objDrill = {
    foo: 1,
    bar: 2,
    fum: 3,
    quux: 4,
    spam: 5
}

// for(key in objDrill) {
//     console.log(key, objDrill[key]);
// }



//  ********  3. Arrays in objects  *********

const obj = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}

// console.log(obj.meals[3]);



//  ********  4. Arrays of objects  **********

const person1 = {
    name: 'Zoe',
    job_title: 'Top Little Dog'
}

const person2 = {
    name: 'Chief',
    job_title: 'Top Big Dog'
}

const person3 = {
    name: 'Lindsey',
    job_title: 'Top Dog Walker'
}

let arrOfPeople = [person1, person2, person3];

// for (let i = 0; i < arrOfPeople.length; i++) {
//     console.log(`${arrOfPeople[i].name} is the ${arrOfPeople[i].job_title}`);
// }

// arrOfPeople.forEach(function(item){
//     console.log(item);
// });



//  ***********  5. Properties that aren't there  ************

arrOfPeople.forEach(function(item){
    if (item.name !== 'Lindsey') {
        item.boss = 'Lindsey';
    } 
    if (item.boss === undefined) {
        console.log(`${item.job_title} ${item.name} doesn't report to anybody`);
    } else {
        console.log(`${item.job_title} ${item.name} reports to ${item.boss}`);
    }
});


console.log(person1);



