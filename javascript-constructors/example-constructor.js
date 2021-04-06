
function ExampleConstructor() {

}
console.log('value of ExampleConstructor.prototype', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype', typeof ExampleConstructor.prototype);

var example = new ExampleConstructor();
console.log('value of example', example);

var instance = example instanceof ExampleConstructor;
console.log('instance', instance);
