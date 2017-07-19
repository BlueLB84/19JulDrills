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

console.log(loaf.hydration());



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

console.log(obj.meals[3]);