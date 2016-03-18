/**
 * Created by Kero on 18/03/2016.
 */
(function() {

    // we define our root object:
    // Windows at browsers
    // exports at servers
    var root = this;

    //version
    var Version = "1.0-a";

    // in case there were another sTack var
    var previousStack = root.sTack;

    // We define some vars for speed improvise
    var ArrayProto = Array.prototype;

    // same here
    var aPush = ArrayProto.push;

    //local sTack variable
    var sTack = function( first_element, size ){
        return new sTack.fn.init( first_element, size );
    };

    sTack.fn = sTack.prototype = {
        isFull: function () {
            // if our top is less than our size - 1
            // and size different from -1
            // we return true...
            var size = this.size;
            return ( this.top >= ( size - 1) ) && ( size != -1 );
        },

        isEmpty: function () {
            // if top equal 0 its empty, so ez
            var size = this.size;
            return ( this.top == -1 );
        },

        peek: function () {
            if( !this.isEmpty() ){
                return this.stackQueue[ this.top ];
            } else {
                throw new Error( "Stack is empty" );
            }
        },

        push: function( element ) {
            if( !this.isFull() ){
                this.stackQueue.push( element );
                this.top++;
            } else {
                throw new Error( "Stack is full" );
            }
        },

        pop: function( element ) {
            if( !this.isEmpty() ) {
                this.stackQueue.splice( this.top );
                this.top--;
            } else {
                throw new Error( "Stack is emptry" );
            }
        }

    };
    
    sTack.fn.init = function( first_element, size ){
        var self = this;
        self.size = size || -1;
        self.top = -1;
        self.stackQueue = [];

        self.push( first_element );
    };

    // since we return a instance of sTack.fn.init
    sTack.fn.init.prototype = sTack.prototype;

    root.sTack = sTack;


    
})();