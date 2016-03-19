# Simple javascript sTack.js structure
Simple javascript Stack structure. No dependencies, runs in browser and NODE.js

## Example
### Non-fixed stacks:
```javascript
//we create a stack with a first element of 1. it accepts any kind of var.
var stack = sTack( "1" );
stack.push(2);
```

### Fixed size stacks:
```javascript
//we create a stack with a first element of 1 and a fixed size of 10
var fixedStack = sTack( 1, 10 );

// fillimg the stack with a foor loop
// we start from since element 0 of stack is 1 already
for(var i = 1; i<fixedStack.size; i++){
  fixedStack.push( i+1 );
}

//if we try to add one more element we get an error
fixedStack.push( 11 );
```

## Initialisation
```javascript
//this can be any kind of data
var bar = {
    a:1,
    b:2,
}

// we initialize our stack
// sTack( first_element, size )
// where size is optional
var foo = sTack( bar );
```

## Methods
### .isFull()
Returns a `boolean` value.

### .isEmpty()
Returns a `boolean` value.

### .peek()
Returns the element at top of the stack without removing it from the stack, if empty throws an error.

### .pop()
Returns and remove the element at top of the stack. Throws an error if the stack is empty.

### .push()
Push a new element to the stack, if it's a fixed size stack and it's full throws an error.

##TODO:
* Add Queues