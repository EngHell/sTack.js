# sTack.js
Simple javascript Stack data structure

## Usage
###Non-fixed stacks:
```javascript
//we create a stack with a first element of 1. it accepts any kind of var.
var stack = sTack( "1" );
stack.push(2);
```

###Fixed size stacks:
```javascript
//we create a stack with a first element of 1 and a fixed size of 10
var fixedStack = stack( 1, 10 );

// fillimg the stack with a foor loop
// we start from since element 0 of stack is 1 already
for(var i = 1; i<stack.size; i++){
  fixedStack.push( i+1 );
}

//if we try to add one more element we get an error
fixedStack.push( 11 );
```
