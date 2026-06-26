// Normal function creation called function declaration i.e.
/*
function sayHi(){
    alert('Hello')
}
*/

/*
let sayHi = function() {
    alert('Hello!');
}

alert(sayHi)

let func = sayHi;

func()
*/

// CallBack functions

// function ask (question, yes, no){
//     if(confirm(question)) yes()
//     else no()
// }

/*
function showOk() {
    alert('You agreed.');
}

function showCancel() {
    alert('You canceled the execution.')
}
ask('Do you agree? ', showOk, showCancel)
*/

// the functions showOk and showCancel are callback functions and expected to be calledback later if neccessary
/*
ask(
    'Do you agree?',
    function() {alert('You agreed');},
    function() {alert('You canceled the execution.');}
);
*/
// one of the main diff between function declaration and function expression is that javascript engine process declaration before the execution of code while expressions only called when code reaches them
