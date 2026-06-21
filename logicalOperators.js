// Logical Operators
// || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing)

// OR (||) operator
// let officeHours = prompt('What is office timings? (in Hours)', '12')
// let isWeekened = true;
// if(officeHours <10 || officeHours>18|| isWeekened ){
//     alert('The office is closed')
// } else {
//     alert("Office is open")
// }

// Using or we can get first truthy value of from a list of variables

// short-circut evaluation

// && (AND) operator

// NOT (!) operator

// double not operator is used to conver a value to Boolean

// alert(!!'Non empty string')

// TASKS
// alert(alert(1) || 2 || alert(3))

let credential = prompt('Enter role:', 'Employee')
if(credential === 'Admin'){
    let password = prompt('Enter Password','')

    if(password === 'TheMaster'){
        alert('Welcome')
    }else if(password.trim() === '' || password ===null){
        alert('Cancelled')
    }else{
        alert('Wrong Password')
    }

}else if(credential.trim() === '' || credential === null){
    alert('Cancelled')
} else {
    alert('I dont know you!')
}