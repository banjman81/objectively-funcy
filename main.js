// Your code here.
function getFirstName(object){
  return object.firstName
}

function getLastName(object){
  return object.lastName
}

function getFullName(object){
  return object.firstName + " " + object.lastName
}

function setFirstName(object, input){
  object.firstName = input
}

function setAge(object, input){
  object.age = input
}

function giveBirthday(object){
  if(object.age === undefined){
    object.age = 1
  }
  else{
    object.age++
  }
}

function marry(a, b){
  a.married = true
  b.married = true
  a.spouseName =  b.firstName+ " " + b.lastName
  b.spouseName =  a.firstName+ " " + a.lastName
}

function divorce(a, b){
  a.married = false
  b.married = false
  delete a["spouseName"]
  delete b["spouseName"]
}


// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
