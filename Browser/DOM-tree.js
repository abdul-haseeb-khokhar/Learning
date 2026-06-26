// DOM (Document object model) tree

// According to this model every html tag is an Object, nested tags are childern of on enclosing them. and text inside tag is also an Object. 

document.body.style.background = 'red'

setTimeout(() => document.body.style.background = '', 3000)

/*
Summary
An HTML/XML document is represented inside the browser as the DOM tree.

Tags become element nodes and form the structure.
Text becomes text nodes.
…etc, everything in HTML has its place in DOM, even comments.
We can use developer tools to inspect DOM and modify it manually.

*/