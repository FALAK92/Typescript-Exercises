"use strict";
//lowercase
let personName = "Falak naz";
console.log("lowercase:", personName.toLowerCase());
//uppercase
console.log("uppercase:", personName.toUpperCase());
//titlecase
console.log("titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
