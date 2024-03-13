"use strict";
let Guest_List = ['Zoya', 'Zimal', 'Zubia'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('My lovely friend.' + Guest_List[i] + ',\n\n it is my pleasure to invite you in my birthday party.\n\n THANK YOU!\n\n');
}
let absent_Guest = 'Zoya';
let new_Guest = 'Mishaal';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('My lovely friend.' + Guest_List[i] + ',\n\n it is my pleasure to invite you in my birthday party.\n\n THANK YOU!\n\n');
}
console.log(`${absent_Guest} is not coming in my birthday party.`);
console.log('Good News! I found a big table so i invite 3 more friends.');
Guest_List.unshift('Suhaima');
Guest_List.splice(2, 0, 'Iqra');
Guest_List.push('Sonya');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('My lovely friend.' + Guest_List[i] + ',\n\n it is my pleasure to invite you in my birthday party.\n\n THANK YOU!\n\n');
}
