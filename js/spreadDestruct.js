
function f(w, ...params) {
    console.log(w, params);
}

// f(1,2,3);
array = [5,6,7,8,9,10];
f(...array);
// f(5,6,7,8,9,10);

user1 = {name: 'aymen', email: 'aymen.sellaouti@gmail.com'};
// extendedUser = {
//     name: user1.name,
//     email: user1.email,
//     age: 25
// }
extendedUser = {
    ...user1,
    age: 25
}
console.log(extendedUser);

user2 = {...user1};

newInfo = {name : 'mohamed'};

user1 = {...user1, ...newInfo};
console.log(user1);
