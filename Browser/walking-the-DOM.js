// document.documentElement = <html>
{/* <body> = document.body 
    <head> = document.head
*/}


// alert(document.body.hasChildNodes()) -> return boolean value telling if this element has nodes or not

// alert(document.body.previousElementSibling)

/*
Summary
Given a DOM node, we can go to its immediate neighbors using navigation properties.

There are two main sets of them:

For all nodes: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.
For element nodes only: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.
Some types of DOM elements, e.g. tables, provide additional properties and collections to access their content.
*/ 
