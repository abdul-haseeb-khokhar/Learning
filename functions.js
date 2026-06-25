// Functions
// syntax 
/*
function name(parameters) {
    // body of function
}
*/
// purpose of a function is code duplication

/*
function showMessage(){
    alert('Hello everyone!');
}

showMessage();
*/

// Local variable : Variable inside a function scope and it can't be accessed outside the function
// Outer variable: Variabel outside the function and it can be accessed by function and its value can be modified by that function.
/*
let user = 'John';

function showMessage(){
    user = 'Bob';

    let message = 'Hello, ' + user;

    alert(message);
}
// User name before function call
alert(user)
showMessage()
// User name after function call
alert(user)
*/

// Parameters
/*
function showMessage(from, text = 'No message') { // If a sometime by mistake there is a chance of a argument not veing passed we can by default assign value to parameter, that will be called in case argument is not passed
    from = '*' + from + '*' // we can modify them withinn function too
    alert(from  +' : '+ text);
}

showMessage('Ana')
*/

// Returning a value
/*
function add (a, b){
    return a+b;
}

let result = add(3, 5)
alert(result)

*/