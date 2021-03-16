var student = {
  firstName: 'Katie',
  lastName: 'Fugate',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Registered Behavior Technician';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOcupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Honda',
  model: 'HRV',
  year: '2020'
};

vehicle['color'] = 'white';
vehicle['isConvertable'] = false;

console.log('value of vehicle[color]:', vehicle['color']);
console.log('value of vehichle[isCovertable]:', vehicle['isConvertable']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Bailey',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
