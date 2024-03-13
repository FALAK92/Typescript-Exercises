


let Guest_List :string[] = ['Zoya', 'Zimal', 'Zubia'];

// for (let i = 0; i < Guest_List.length; i++) {
//     console.log('My lovely friend.' + Guest_List[i] + ',\n\n it is my pleasure to invite you in my birthday party.\n\n THANK YOU!\n\n');
// }
let absent_Guest: string ='Zoya';
let new_Guest: string ='Mishaal';
Guest_List[0] = new_Guest
// for (let i = 0; i < Guest_List.length; i++) {
//     console.log('My lovely friend.' + Guest_List[i] + ',\n\n it is my pleasure to invite you in my birthday party.\n\n THANK YOU!\n\n');
// }

// console.log(`${absent_Guest} is not coming in my birthday party.`);
// console.log('Good News! I found a big table so i invite 3 more friends.');

//array mai 3 guest add kie hain
Guest_List.unshift('Suhaima');
Guest_List.splice(2 , 0, 'Iqra');
Guest_List.push('Sonya');

// yahan pr 6 guest ka array print hua hai
// for (let i = 0; i < Guest_List.length; i++) {
//     console.log('My lovely friend.' + Guest_List[i] + ',\n\n it is my pleasure to invite you in my birthday party.\n\n THANK YOU!\n\n');
// }

//sorry message for not inviting

// console.log('\nSorry I can not arrange big table, only two people will be invited.');

//yahan pr guest remove kie hain
while(Guest_List.length > 2){
    let remove_Guest =Guest_List.pop();
    // console.log(`Sorry ${remove_Guest}, you are not invited for birthday party.`);
}
//bache hue 2 invited guest
// for(let i = 0; i < Guest_List.length; i++) {
//     console.log('My Dear Friend,' + Guest_List[i] +'\n\n You are still invited.\n\nThank You!\n\n');
// }

//sare guest remove krdie
Guest_List.splice(0,2);
console.log(Guest_List);

//Exercise # 19
//print a number indicating the number of people you are inviting to birthday party

console.log(`Total number of guest are: ${Guest_List.length}`);
