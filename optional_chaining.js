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
console.log(animals.dog?.name)
//=> "Bella"

// this one does not exist:
console.log(animals.duck?.name)
//=> undefined

// this one does not exist, but it has a default value:
console.log(animals.goose?.name ?? 'Nick Bradshaw')
//=> "Nick Bradshaw"

// You can also do multiple chaining on an object:
console.log(animals.class?.infraclass?.order ?? 'Diprotodontia')
//=> "Diprotodontia"

// ...but you cannot do optional chaining on a top level parent:
// console.log(kingdom.class?.infraclass?.order ?? 'Diprotodontia')
// ...this will throw an error because no "kingdom" exists anywhere
//=> ReferenceError: kingdom is not defined

// Optional chaining works with arrays:
const lockbox = {chamber: [{code: '1'}, {code: '2'}, {code: '3'}]};
console.log(lockbox.chamber?.[0].code)
//=> "1"

// We can check to see if a method exists before calling it:
const critters = {
  mice: [{name: 'Mickey'}, {name: 'Mini'}],
  trap: function(){ // anonymous function, immediately invoked
    console.log("a mouse has been caught!")
  },
  more_specific_trap: function(name){ // anonymous function, immediately invoked
    console.log(`${name} has been caught!`)
  }
}

// this method does exist:
const trap1 = critters.trap?.();
//=> "a mouse has been caught!"

// this method also exists, and so does the variable passed into it:
const trap2 = critters.more_specific_trap?.(critters.mice[0].name)
//=> "Mickey has been caught!"

// this method does exist, but the variable passed into it does not exist:
const trap3 = critters.more_specific_trap?.(critters.mice[8]?.name ?? 'Speedy')
//=> "Speedy has been caught!"
