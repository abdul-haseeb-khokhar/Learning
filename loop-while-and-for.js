// While Loop
/*
a = 0
while(a<=3){
    alert(a);
    a++;
}
*/

// do .... while loop
/*
let i = 0
do {
  alert(i)
  i++
}while(i<=3);
*/

// for loop
/*
for(let i = 0; i < 3; i++){
    alert(i)
}
*/

// break directive
/*
let sum = 0;
while (true){
    let value =+ prompt('Enter Number', '')

    if(!value) break;
    sum += value;
}

alert('Sum: '+ sum)
*/

// continue directive
/*
for (let i = 0; i<10; i++){
    if(i % 2 == 0) continue;
    alert(i)
}
*/

// Label
// Normaly when we use break statement in a nested loop it only breaks inside loop so we use label that tell break to break out to label
/*
outer: for(let i = 0; i<3; i++){
    for(let j = 0; j<3; j++){
        let input = prompt(`Value at coords (${i},${j})`, '')

        if(!input) break outer;
    }
}

alert('Done!')
*/