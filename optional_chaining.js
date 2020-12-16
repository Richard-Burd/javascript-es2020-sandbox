// Available online here: https://codepen.io/richardburd/pen/gOwWRNO?editors=0012

// https://www.youtube.com/watch?v=jdU5X3GJXBs
// ?. JavaScript 2020's Optional Chaining by Better Dev

const animals = {
  dog: { name: 'Bella'},
  cat: { name: 'Hilo'}
}

// check & see if there's a duck name in the object:
// console.log(animals.duck.name)
// this will throw an error

// this one does exist:
const name1 = animals.dog?.name

// this one does not exist:
const name2 = animals.duck?.name

// this one does not exist, and has a default value:
const name3 = animals.goose?.name ?? 'Nick Bradshaw'

// You can even do multiple chaining on an object:
const name4 = animals.class?.infraclass?.order ?? 'Diprotodontia'

// ...but you cannot do optional chaining on a top level parent:
// const name5 = kingdom.class?.infraclass?.order ?? 'Diprotodontia'
// ...this will throw an error because no "kingdom" exists anywhere

// Optional chaining works with arrays:
const lockbox = {chamber: [{code: '1'}, {code: '2'}, {code: '3'}]};
const secretkey = lockbox.chamber?.[0].code

console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);
console.log(secretkey);

// We can check to see if a method exists before calling it:
const critters = {
  mice: [{name: 'Mickey'}, {name: 'Mini'}],
  trap: function(){
    console.log("a mouse has been caught!")
  },
  more_specific_trap: function(name){
    console.log(`${name} has been caught!`)
  }
}

// this method does exist:
const trap1 = critters.trap?.();

// this method also exists, and so does the variable passed into it:
const trap2 = critters.more_specific_trap?.(critters.mice[0].name)

// this method does exist, but not the variable passed into it:
const trap3 = critters.more_specific_trap?.(critters.mice[8]?.name ?? 'Speedy')
