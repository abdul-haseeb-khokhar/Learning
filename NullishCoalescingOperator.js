// Nullish Coalescing operator (??)


// it will give first defined value to result --> Considering for this operator null and undefined are not defined values

/*
let firstName = null;
let secondName = undefined;
let nickName = 'SuperCoder';

alert(firstName ?? secondName?? nickName)
*/

// Diff between || and ?? is that OR treats all 0, "", and false and null/undefined as falsy values  but ?? treats only undefined and null as undefined ones

// let height = null;
// let width = null;

// let area = (height ?? 100) * (width ?? 30)
// alert(area)

let x = 1 && 2 ?? 3

alert(x)